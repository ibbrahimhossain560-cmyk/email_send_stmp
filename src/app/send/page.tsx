"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: string;
}

type ComposeMode = "template" | "html" | "plain" | "ai-generate";

export default function SendPage() {
  // Core states
  const [templates, setTemplates] = useState<Template[]>([]);
  const [mode, setMode] = useState<ComposeMode>("template");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [body, setBody] = useState("");
  const [customHtml, setCustomHtml] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const [buttonText, setButtonText] = useState("Get Started");
  
  // AI Generator states
  const [aiDescription, setAiDescription] = useState("");
  const [aiLength, setAiLength] = useState("");
  const [aiTemplateStyle, setAiTemplateStyle] = useState("default");
  const [generating, setGenerating] = useState(false);
  
  // UI states
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [previewHtml, setPreviewHtml] = useState("");
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [enhancingSubject, setEnhancingSubject] = useState(false);
  const [enhancingBody, setEnhancingBody] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("nrmail_token");
    if (!token) {
      router.push("/login");
      return;
    }

    fetch("/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.valid) {
          setAuthenticated(true);
        } else {
          localStorage.removeItem("nrmail_token");
          router.push("/login");
        }
      })
      .catch(() => {
        router.push("/login");
      })
      .finally(() => setChecking(false));
  }, [router]);

  useEffect(() => {
    if (!authenticated) return;
    fetch("/api/templates")
      .then((r) => r.json())
      .then((d) => {
        setTemplates(d);
        if (d.length > 0) setSelectedTemplate(d[0].id);
      });
  }, [authenticated]);

  const getToken = () => localStorage.getItem("nrmail_token") || "";

  // Auto-preview: updates whenever template, body, subject, recipientName, mode, or customHtml changes
  useEffect(() => {
    if (!authenticated) return;
    
    const timer = setTimeout(() => {
      updatePreview();
    }, 400); // 400ms debounce
    
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTemplate, body, subject, recipientName, mode, customHtml, buttonLink, buttonText, authenticated]);

  const updatePreview = async () => {
    try {
      setPreviewLoading(true);
      let htmlToPreview = "";
      
      if (mode === "html") {
        htmlToPreview = customHtml || `<div style="padding:40px;text-align:center;font-family:Arial,sans-serif;color:#64748b"><p style="font-size:48px;margin-bottom:16px">🎨</p><h2 style="margin:0 0 8px;color:#334155">Custom HTML Mode</h2><p>Paste your HTML code in the editor to see a live preview here.</p></div>`;
      } else if (mode === "plain") {
        const plainBody = body || "Your plain text email content will appear here...";
        htmlToPreview = `<!DOCTYPE html><html><head><style>body{margin:0;padding:40px;font-family:'Segoe UI',Arial,sans-serif;background:#f8fafc;color:#1e293b;line-height:1.8;}</style></head><body><div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.1)"><pre style="white-space:pre-wrap;word-wrap:break-word;font-family:inherit;margin:0;font-size:15px">${plainBody.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></div></body></html>`;
      } else if (mode === "ai-generate") {
        htmlToPreview = `<div style="padding:60px 40px;text-align:center;font-family:Arial,sans-serif;background:linear-gradient(135deg,#7c3aed10,#ec489910);min-height:400px;display:flex;align-items:center;justify-content:center"><div><p style="font-size:56px;margin-bottom:16px">🤖</p><h2 style="margin:0 0 12px;color:#7c3aed;font-size:22px">AI Generate Mode</h2><p style="color:#64748b;font-size:14px;max-width:300px;margin:0 auto">Describe what you want and click Generate. The AI-created content will appear as a template preview.</p></div></div>`;
      } else {
        // Template mode — fetch from server
        const token = getToken();
        const res = await fetch("/api/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({
            templateId: selectedTemplate || "welcome",
            variables: {
              recipientName: recipientName || "John",
              body: body || "This is a preview of how your email will look using this template.",
              subject: subject || "Preview Email",
              buttonLink: buttonLink || "#",
              buttonText: buttonText || "Get Started"
            },
          }),
        });
        const data = await res.json();
        htmlToPreview = data.html;
      }
      
      setPreviewHtml(htmlToPreview);
    } catch (error) {
      console.error("Preview error:", error);
    } finally {
      setPreviewLoading(false);
    }
  };

  const handleAiGenerate = async () => {
    if (!aiDescription.trim()) {
      setStatus({ type: "error", msg: "Please describe what you want in the email" });
      return;
    }

    setGenerating(true);
    setStatus(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify({
          description: aiDescription,
          length: aiLength ? parseInt(aiLength) : null,
          templateStyle: aiTemplateStyle
        })
      });

      const data = await res.json();

      if (res.ok) {
        if (data.subject && !subject) {
          setSubject(data.subject);
        }
        if (aiTemplateStyle === "html" && data.content) {
          // For HTML style, put generated content in custom HTML mode
          setCustomHtml(data.content);
          setMode("html");
          setStatus({ type: "success", msg: "\ud83e\udd16 AI generated HTML email successfully! Check the preview." });
        } else {
          setBody(data.content);
          setMode("template"); // Switch to template mode to see the generated content
          setStatus({ type: "success", msg: "\ud83e\udd16 AI generated content successfully! Check the preview." });
        }
      } else {
        setStatus({ type: "error", msg: data.error || "Failed to generate content" });
      }
    } catch (error) {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setGenerating(false);
    }
  };

  const handleEnhance = async (type: "subject" | "body") => {
    const text = type === "subject" ? subject : body;
    
    if (!text.trim()) {
      setStatus({ type: "error", msg: `Please enter ${type === "subject" ? "a subject" : "message body"} first` });
      return;
    }

    if (type === "subject") {
      setEnhancingSubject(true);
    } else {
      setEnhancingBody(true);
    }
    setStatus(null);

    try {
      const res = await fetch("/api/enhance", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          Authorization: `Bearer ${getToken()}` 
        },
        body: JSON.stringify({ text, type }),
      });

      const data = await res.json();

      if (res.ok) {
        if (type === "subject") {
          setSubject(data.enhanced);
        } else {
          setBody(data.enhanced);
        }
        setStatus({ type: "success", msg: `✨ ${type === "subject" ? "Subject" : "Message"} enhanced successfully!` });
      } else {
        setStatus({ type: "error", msg: data.error || "Failed to enhance text" });
      }
    } catch (error) {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      if (type === "subject") {
        setEnhancingSubject(false);
      } else {
        setEnhancingBody(false);
      }
    }
  };

  const loadPreview = () => {
    updatePreview();
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      let emailBody = body;
      let emailHtml = "";

      if (mode === "html") {
        emailHtml = customHtml;
        emailBody = customHtml.replace(/<[^>]*>/g, ''); // Strip HTML for plain text fallback
      } else if (mode === "plain") {
        emailBody = body;
      } else {
        // Template mode - will be handled by the API
      }

      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({
          to,
          subject,
          templateId: mode === "template" ? selectedTemplate : null,
          variables: mode === "template" ? { 
            recipientName: recipientName || "there", 
            body,
            buttonLink: buttonLink || "#",
            buttonText: buttonText || "Get Started"
          } : null,
          html: mode === "html" ? customHtml : null,
          text: mode === "plain" ? body : null,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", msg: `Email sent successfully! ID: ${data.messageId}` });
        setTo("");
        setSubject("");
        setRecipientName("");
        setBody("");
        setCustomHtml("");
        setButtonLink("");
        setAiDescription("");
      } else {
        setStatus({ type: "error", msg: data.error || "Failed to send email" });
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("nrmail_token");
    router.push("/login");
  };

  if (checking) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight animate-fade-in">Send Email</h1>
          <p className="text-muted mt-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Compose and send beautiful emails using SMTP
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all text-sm font-medium"
        >
          Logout
        </button>
      </div>

      {/* Mode Selector */}
      <div className="mb-8 animate-fade-in">
        <label className="block text-sm font-medium mb-3">Compose Mode</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: "template", label: "📧 Template", desc: "Use pre-designed templates" },
            { value: "html", label: "🎨 Custom HTML", desc: "Write custom HTML" },
            { value: "plain", label: "📝 Plain Text", desc: "Simple text email" },
            { value: "ai-generate", label: "🤖 AI Generate", desc: "Let AI write for you" }
          ].map((m) => (
            <button
              key={m.value}
              type="button"
              onClick={() => setMode(m.value as ComposeMode)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                mode === m.value
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50 bg-surface"
              }`}
            >
              <div className="font-semibold text-sm">{m.label}</div>
              <div className="text-xs text-muted mt-1">{m.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <form onSubmit={handleSend} className="space-y-6">
            
            {/* AI Generate Mode */}
            {mode === "ai-generate" && (
              <div className="space-y-6 p-6 rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
                <div>
                  <label className="block text-sm font-medium mb-2">✍️ Describe Your Email</label>
                  <textarea
                    value={aiDescription}
                    onChange={(e) => setAiDescription(e.target.value)}
                    rows={4}
                    placeholder="Example: Write a professional welcome email for new customers, thanking them for joining and explaining what they can expect..."
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">📏 Target Length</label>
                    <input
                      type="number"
                      value={aiLength}
                      onChange={(e) => setAiLength(e.target.value)}
                      placeholder="e.g., 150"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                    />
                    <p className="text-xs text-muted mt-1">Words/characters (optional)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">🎨 Style</label>
                    <select
                      value={aiTemplateStyle}
                      onChange={(e) => setAiTemplateStyle(e.target.value)}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                    >
                      <option value="default">Default</option>
                      <option value="html">Rich HTML</option>
                      <option value="plain">Plain Text</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAiGenerate}
                  disabled={generating || !aiDescription.trim()}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {generating ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Generate with AI
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Template Mode */}
            {mode === "template" && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Template</label>
                  <select
                    value={selectedTemplate}
                    onChange={(e) => setSelectedTemplate(e.target.value)}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  >
                    {templates.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} - {t.category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Recipient Name</label>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">🔗 Button Link</label>
                    <input
                      type="url"
                      value={buttonLink}
                      onChange={(e) => setButtonLink(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">🔘 Button Text</label>
                    <input
                      type="text"
                      value={buttonText}
                      onChange={(e) => setButtonText(e.target.value)}
                      placeholder="Get Started"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Custom HTML Mode */}
            {mode === "html" && (
              <div>
                <label className="block text-sm font-medium mb-2">Custom HTML Code</label>
                <textarea
                  value={customHtml}
                  onChange={(e) => setCustomHtml(e.target.value)}
                  rows={12}
                  placeholder="<html>&#10;  <body>&#10;    <h1>Hello!</h1>&#10;    <p>Your custom email content here...</p>&#10;  </body>&#10;</html>"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>
            )}

            {/* Shared Fields for all modes except AI Generate */}
            {mode !== "ai-generate" && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Recipient Email</label>
                  <input
                    type="email"
                    required
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="recipient@example.com"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center justify-between">
                    <span>Subject</span>
                    <button
                      type="button"
                      onClick={() => handleEnhance("subject")}
                      disabled={enhancingSubject || !subject.trim()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-purple-400 hover:text-purple-300 transition-all text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed border border-purple-500/20 hover:border-purple-500/40"
                      title="AI enhance subject line"
                    >
                      {enhancingSubject ? (
                        <>
                          <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Enhancing...
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                          Magic ✨
                        </>
                      )}
                    </button>
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Your email subject"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                {mode !== "html" && (
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center justify-between">
                      <span>Message Body</span>
                      <button
                        type="button"
                        onClick={() => handleEnhance("body")}
                        disabled={enhancingBody || !body.trim()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-purple-400 hover:text-purple-300 transition-all text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed border border-purple-500/20 hover:border-purple-500/40"
                        title="AI enhance message body"
                      >
                        {enhancingBody ? (
                          <>
                            <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Enhancing...
                          </>
                        ) : (
                          <>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            Magic ✨
                          </>
                        )}
                      </button>
                    </label>
                    <textarea
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      rows={5}
                      placeholder="Write your email message here..."
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    />
                  </div>
                )}
              </>
            )}

            {status && (
              <div
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  status.type === "success"
                    ? "bg-success/10 text-success border border-success/20"
                    : "bg-error/10 text-error border border-error/20"
                }`}
              >
                {status.msg}
              </div>
            )}

            {mode !== "ai-generate" && (
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                      Send Email
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={loadPreview}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface-light hover:border-primary/50 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  Preview
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <div className="sticky top-24">
            <div className="rounded-2xl border border-border bg-surface overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-light">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-error/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-success/60" />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewDevice("desktop")}
                    className={`p-1.5 rounded transition-colors ${previewDevice === "desktop" ? "bg-primary text-primary-fg" : "text-muted hover:text-fg hover:bg-surface"}`}
                    title="Desktop View"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice("tablet")}
                    className={`p-1.5 rounded transition-colors ${previewDevice === "tablet" ? "bg-primary text-primary-fg" : "text-muted hover:text-fg hover:bg-surface"}`}
                    title="Tablet View"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice("mobile")}
                    className={`p-1.5 rounded transition-colors ${previewDevice === "mobile" ? "bg-primary text-primary-fg" : "text-muted hover:text-fg hover:bg-surface"}`}
                    title="Mobile View"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <span className="text-xs text-muted ml-2">
                    {previewDevice === "desktop" ? "Desktop" : previewDevice === "tablet" ? "Tablet" : "Mobile"}
                  </span>
                </div>
              </div>
              <div className="p-4 flex justify-center bg-muted/20">
                {previewLoading ? (
                  <div className="flex flex-col items-center justify-center py-20 text-muted">
                    <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin mb-4" />
                    <p className="text-sm">Loading preview...</p>
                  </div>
                ) : previewHtml ? (
                  <div 
                    className="transition-all duration-300"
                    style={{
                      width: previewDevice === "desktop" ? "100%" : previewDevice === "tablet" ? "768px" : "375px",
                      maxWidth: "100%"
                    }}
                  >
                    <iframe
                      srcDoc={previewHtml}
                      className="w-full rounded-lg bg-white shadow-lg border border-border"
                      style={{ minHeight: "500px", height: "600px", border: "1px solid #e5e7eb" }}
                      title="Email Preview"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-muted">
                    <svg className="w-16 h-16 mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <p className="text-sm">Select a template to see preview</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

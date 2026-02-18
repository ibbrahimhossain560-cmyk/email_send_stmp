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
  const [showPreview, setShowPreview] = useState(false);
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
        setBody(data.content);
        if (data.subject && !subject) {
          setSubject(data.subject);
        }
        setMode("template"); // Switch to template mode to see the generated content
        setStatus({ type: "success", msg: "🤖 AI generated content successfully!" });
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

  const loadPreview = async () => {
    let htmlToPreview = "";
    
    if (mode === "html") {
      htmlToPreview = customHtml;
    } else if (mode === "plain") {
      htmlToPreview = `<pre style="font-family: Arial, sans-serif; white-space: pre-wrap; word-wrap: break-word;">${body}</pre>`;
    } else {
      // Template mode
      const res = await fetch("/api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({
          templateId: selectedTemplate,
          variables: { 
            recipientName: recipientName || "there", 
            body, 
            subject,
            buttonLink: buttonLink || "#",
            buttonText: buttonText || "Get Started"
          },
        }),
      });
      const data = await res.json();
      htmlToPreview = data.html;
    }
    
    setPreviewHtml(htmlToPreview);
    setShowPreview(true);
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
                <span className="text-xs text-muted">Email Preview</span>
              </div>
              <div className="p-4">
                {showPreview && previewHtml ? (
                  <iframe
                    srcDoc={previewHtml}
                    className="w-full rounded-lg bg-white"
                    style={{ minHeight: "500px", border: "none" }}
                    title="Email Preview"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-muted">
                    <svg className="w-16 h-16 mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <p className="text-sm">Click &quot;Preview&quot; to see your email</p>
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

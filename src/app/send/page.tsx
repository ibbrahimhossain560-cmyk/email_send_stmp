"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: string;
}

type CustomMode = "html" | "plain" | "ai";

function SendPageInner() {
  const [templates, setTemplates] = useState<Template[]>([]);
  // selectedTemplate is one of the template IDs or "custom"
  const [selectedTemplate, setSelectedTemplate] = useState("welcome");
  // When selectedTemplate === "custom", which sub-mode is active
  const [customMode, setCustomMode] = useState<CustomMode>("html");

  // Shared fields
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [body, setBody] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const [buttonText, setButtonText] = useState("Get Started");

  // Custom-only fields
  const [customHtml, setCustomHtml] = useState("");

  // AI fields
  const [aiDescription, setAiDescription] = useState("");
  const [aiLength, setAiLength] = useState("");
  const [aiStyle, setAiStyle] = useState("default");
  const [generating, setGenerating] = useState(false);

  // UI
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [previewHtml, setPreviewHtml] = useState("");
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [enhancingSubject, setEnhancingSubject] = useState(false);
  const [enhancingBody, setEnhancingBody] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  const previewDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem("nrmail_token");
    if (!token) { router.push("/login"); return; }
    fetch("/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.valid) setAuthenticated(true);
        else { localStorage.removeItem("nrmail_token"); router.push("/login"); }
      })
      .catch(() => router.push("/login"))
      .finally(() => setChecking(false));
  }, [router]);

  // Load templates; respect ?template= query param
  useEffect(() => {
    if (!authenticated) return;
    fetch("/api/templates")
      .then((r) => r.json())
      .then((d: Template[]) => {
        setTemplates(d);
        const queryTemplate = searchParams.get("template");
        if (queryTemplate === "custom") {
          setSelectedTemplate("custom");
        } else if (queryTemplate && d.some((t: Template) => t.id === queryTemplate)) {
          setSelectedTemplate(queryTemplate);
        } else if (d.length > 0) {
          setSelectedTemplate(d[0].id);
        }
      });
  }, [authenticated, searchParams]);

  const getToken = () => localStorage.getItem("nrmail_token") || "";

  const isCustom = selectedTemplate === "custom";

  // Auto-preview with debounce
  useEffect(() => {
    if (!authenticated) return;
    if (previewDebounce.current) clearTimeout(previewDebounce.current);
    previewDebounce.current = setTimeout(() => refreshPreview(), 400);
    return () => { if (previewDebounce.current) clearTimeout(previewDebounce.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTemplate, customMode, body, subject, recipientName, customHtml, buttonLink, buttonText, authenticated]);

  const refreshPreview = async () => {
    setPreviewLoading(true);
    try {
      let html = "";
      if (isCustom) {
        if (customMode === "html") {
          html = customHtml || `<div style="padding:60px 40px;text-align:center;font-family:Arial,sans-serif;color:#64748b;background:#f8fafc;min-height:500px;display:flex;align-items:center;justify-content:center;flex-direction:column"><p style="font-size:56px;margin:0 0 16px">🎨</p><h2 style="margin:0 0 10px;color:#334155;font-size:22px">Custom HTML Mode</h2><p style="font-size:14px;max-width:280px;margin:0 auto;line-height:1.6">Paste your HTML code in the editor on the left to see a live preview here.</p></div>`;
        } else if (customMode === "plain") {
          const txt = body || "Start typing your plain text email on the left...";
          html = `<!DOCTYPE html><html><head><style>*{box-sizing:border-box}body{margin:0;padding:40px 24px;font-family:'Segoe UI',Arial,sans-serif;background:#f1f5f9;color:#1e293b;line-height:1.8}</style></head><body><div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:40px;box-shadow:0 4px 24px rgba(0,0,0,0.08)"><p style="font-size:15px;margin:0 0 20px">Hi <strong>${recipientName || "there"}</strong>,</p><div style="font-size:15px;white-space:pre-wrap;word-wrap:break-word">${txt.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div><hr style="margin:28px 0;border:none;border-top:1px solid #e5e7eb"><p style="font-size:14px;color:#64748b;margin:0">Best regards,<br><strong style="color:#1e293b">Sender</strong></p></div></body></html>`;
        } else {
          html = `<div style="padding:60px 40px;text-align:center;font-family:Arial,sans-serif;background:linear-gradient(135deg,#7c3aed08,#ec489908);min-height:500px;display:flex;align-items:center;justify-content:center;flex-direction:column"><p style="font-size:56px;margin:0 0 16px">🤖</p><h2 style="margin:0 0 12px;color:#7c3aed;font-size:22px">AI Generate</h2><p style="color:#64748b;font-size:14px;max-width:300px;margin:0 auto;line-height:1.6">Describe your email and click <strong>Generate</strong>. The result will appear here instantly.</p></div>`;
        }
      } else {
        const res = await fetch("/api/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
          body: JSON.stringify({
            templateId: selectedTemplate || "welcome",
            variables: {
              recipientName: recipientName || "John",
              body: body || "This is a preview of how your email will look using this template.",
              subject: subject || "Preview Email",
              buttonLink: buttonLink || "#",
              buttonText: buttonText || "Get Started",
            },
          }),
        });
        const data = await res.json();
        html = data.html || "";
      }
      setPreviewHtml(html);
    } catch (e) {
      console.error("Preview failed:", e);
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
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({ description: aiDescription, length: aiLength ? parseInt(aiLength) : null, templateStyle: aiStyle }),
      });
      const data = await res.json();
      if (res.ok) {
        if (data.subject && !subject) setSubject(data.subject);
        if (aiStyle === "html") {
          setCustomHtml(data.content);
          setCustomMode("html");
        } else {
          setBody(data.content);
          setCustomMode("plain");
        }
        setStatus({ type: "success", msg: "🤖 AI generated content successfully! Check the preview." });
      } else {
        setStatus({ type: "error", msg: data.error || "Failed to generate content" });
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setGenerating(false);
    }
  };

  const handleEnhance = async (type: "subject" | "body") => {
    const text = type === "subject" ? subject : body;
    if (!text.trim()) { setStatus({ type: "error", msg: `Please enter ${type === "subject" ? "a subject" : "message body"} first` }); return; }
    type === "subject" ? setEnhancingSubject(true) : setEnhancingBody(true);
    setStatus(null);
    try {
      const res = await fetch("/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({ text, type }),
      });
      const data = await res.json();
      if (res.ok) {
        type === "subject" ? setSubject(data.enhanced) : setBody(data.enhanced);
        setStatus({ type: "success", msg: `✨ ${type === "subject" ? "Subject" : "Message"} enhanced!` });
      } else {
        setStatus({ type: "error", msg: data.error || "Failed to enhance" });
      }
    } catch { setStatus({ type: "error", msg: "Network error." }); }
    finally { type === "subject" ? setEnhancingSubject(false) : setEnhancingBody(false); }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const payload: Record<string, unknown> = { to, subject };

      if (isCustom) {
        if (customMode === "html") {
          payload.html = customHtml;
          payload.text = customHtml.replace(/<[^>]*>/g, "");
        } else {
          payload.text = body;
          payload.html = null;
        }
        payload.templateId = null;
        payload.variables = null;
      } else {
        payload.templateId = selectedTemplate;
        payload.variables = {
          recipientName: recipientName || "there",
          body,
          buttonLink: buttonLink || "#",
          buttonText: buttonText || "Get Started",
        };
        payload.html = null;
        payload.text = null;
      }

      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", msg: `✅ Email sent successfully! ID: ${data.messageId}` });
        setTo(""); setSubject(""); setRecipientName(""); setBody(""); setCustomHtml("");
        setButtonLink(""); setAiDescription("");
      } else {
        setStatus({ type: "error", msg: data.error || "Failed to send email" });
      }
    } catch { setStatus({ type: "error", msg: "Network error. Please try again." }); }
    finally { setSending(false); }
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

  const MagicBtn = ({ type }: { type: "subject" | "body" }) => {
    const loading = type === "subject" ? enhancingSubject : enhancingBody;
    return (
      <button
        type="button"
        onClick={() => handleEnhance(type)}
        disabled={loading || !(type === "subject" ? subject : body).trim()}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-purple-400 hover:text-purple-300 transition-all text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed border border-purple-500/20 hover:border-purple-500/40"
      >
        {loading ? (
          <><svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Enhancing...</>
        ) : (
          <><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>Magic ✨</>
        )}
      </button>
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight animate-fade-in">Send Email</h1>
          <p className="text-muted mt-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Compose and send beautiful emails using SMTP
          </p>
        </div>
        <button
          onClick={() => { localStorage.removeItem("nrmail_token"); router.push("/login"); }}
          className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all text-sm font-medium"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ── LEFT COLUMN ─────────────────────── */}
        <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <form onSubmit={handleSend} className="space-y-5">

            {/* ── Template selector ── */}
            <div>
              <label className="block text-sm font-semibold mb-2">📧 Choose Template</label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full rounded-xl border-2 border-border bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              >
                <option value="custom">✏️ Custom — Write your own HTML / Plain Text / AI</option>
                {templates.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} — {t.category}
                  </option>
                ))}
              </select>
              {!isCustom && (
                <p className="text-xs text-muted mt-1.5 ml-1">
                  {templates.find((t) => t.id === selectedTemplate)?.description}
                </p>
              )}
            </div>

            {/* ── CUSTOM MODE ── */}
            {isCustom && (
              <div className="rounded-xl border-2 border-border overflow-hidden">
                {/* Tab bar */}
                <div className="flex border-b border-border bg-surface-light">
                  {([
                    { key: "html" as CustomMode, icon: "🎨", label: "Custom HTML" },
                    { key: "plain" as CustomMode, icon: "📝", label: "Plain Text" },
                    { key: "ai" as CustomMode,   icon: "🤖", label: "AI Generate" },
                  ]).map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setCustomMode(tab.key)}
                      className={`flex-1 py-3 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                        customMode === tab.key
                          ? "bg-primary text-white"
                          : "text-muted hover:text-foreground hover:bg-surface"
                      }`}
                    >
                      {tab.icon} {tab.label}
                    </button>
                  ))}
                </div>

                {/* Custom HTML editor */}
                {customMode === "html" && (
                  <div className="p-4">
                    <textarea
                      value={customHtml}
                      onChange={(e) => setCustomHtml(e.target.value)}
                      rows={14}
                      placeholder={"<html>\n  <body style=\"font-family:Arial,sans-serif;\">\n    <h1 style=\"color:#667eea;\">Hello!</h1>\n    <p>Your beautiful email content here...</p>\n  </body>\n</html>"}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    />
                    <p className="text-xs text-muted mt-1.5">Paste full HTML. Live preview updates on the right.</p>
                  </div>
                )}

                {/* Plain Text editor */}
                {customMode === "plain" && (
                  <div className="p-4 space-y-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-muted uppercase tracking-wide">Recipient Name</label>
                      <input
                        type="text"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-muted uppercase tracking-wide">Message</label>
                        <MagicBtn type="body" />
                      </div>
                      <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        rows={10}
                        placeholder="Write your plain text email here..."
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* AI Generate */}
                {customMode === "ai" && (
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 text-muted uppercase tracking-wide">✍️ Describe your email</label>
                      <textarea
                        value={aiDescription}
                        onChange={(e) => setAiDescription(e.target.value)}
                        rows={4}
                        placeholder="Example: Write a professional welcome email for new users, warm tone, mention 3 key benefits of our product..."
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 text-muted uppercase tracking-wide">📏 Target Length</label>
                        <input
                          type="number"
                          value={aiLength}
                          onChange={(e) => setAiLength(e.target.value)}
                          placeholder="e.g. 200 words"
                          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 text-muted uppercase tracking-wide">🎨 Output Style</label>
                        <select
                          value={aiStyle}
                          onChange={(e) => setAiStyle(e.target.value)}
                          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                        >
                          <option value="default">Plain text body</option>
                          <option value="html">Full HTML email</option>
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
                        <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Generating…</>
                      ) : (
                        <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>Generate with AI</>
                      )}
                    </button>
                    <p className="text-xs text-muted text-center">AI output will switch to HTML or Plain Text tab automatically.</p>
                  </div>
                )}
              </div>
            )}

            {/* ── Named template fields ── */}
            {!isCustom && (
              <>
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

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium">Message Body</label>
                    <MagicBtn type="body" />
                  </div>
                  <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    rows={5}
                    placeholder="Write your email message here..."
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />
                </div>
              </>
            )}

            {/* ── Shared send fields (hidden while in AI tab) ── */}
            {!(isCustom && customMode === "ai") && (
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
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium">Subject</label>
                    <MagicBtn type="subject" />
                  </div>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Your email subject"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </>
            )}

            {/* Status */}
            {status && (
              <div className={`rounded-xl px-4 py-3 text-sm font-medium ${status.type === "success" ? "bg-success/10 text-success border border-success/20" : "bg-error/10 text-error border border-error/20"}`}>
                {status.msg}
              </div>
            )}

            {/* Send button */}
            {!(isCustom && customMode === "ai") && (
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
              >
                {sending ? (
                  <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending…</>
                ) : (
                  <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>Send Email</>
                )}
              </button>
            )}
          </form>
        </div>

        {/* ── RIGHT COLUMN — live preview ─────── */}
        <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <div className="sticky top-24">
            <div className="rounded-2xl border border-border bg-surface overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-light">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <div className="h-3 w-3 rounded-full bg-green-400/70" />
                  <span className="ml-2 text-xs text-muted font-medium">
                    {isCustom
                      ? customMode === "html" ? "🎨 Custom HTML" : customMode === "plain" ? "📝 Plain Text" : "🤖 AI Generate"
                      : `📧 ${templates.find((t) => t.id === selectedTemplate)?.name ?? selectedTemplate}`}
                  </span>
                </div>
                {/* Device toggle */}
                <div className="flex items-center gap-1">
                  {(["desktop", "tablet", "mobile"] as const).map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setPreviewDevice(d)}
                      title={d.charAt(0).toUpperCase() + d.slice(1)}
                      className={`p-1.5 rounded transition-colors ${previewDevice === d ? "bg-primary text-white" : "text-muted hover:text-foreground hover:bg-surface"}`}
                    >
                      {d === "desktop" && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round" /><line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round" /></svg>}
                      {d === "tablet" && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" /></svg>}
                      {d === "mobile" && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" /></svg>}
                    </button>
                  ))}
                  <span className="text-xs text-muted ml-1 capitalize">{previewDevice}</span>
                </div>
              </div>

              {/* Preview pane */}
              <div className="p-3 flex justify-center bg-zinc-900/30 dark:bg-black/30 min-h-[540px]">
                {previewLoading ? (
                  <div className="flex flex-col items-center justify-center py-24 text-muted">
                    <div className="w-8 h-8 border-[3px] border-primary border-t-transparent rounded-full animate-spin mb-4" />
                    <p className="text-sm">Loading preview…</p>
                  </div>
                ) : previewHtml ? (
                  <div
                    className="transition-all duration-300 w-full"
                    style={{
                      maxWidth: previewDevice === "desktop" ? "100%" : previewDevice === "tablet" ? "768px" : "375px",
                    }}
                  >
                    <iframe
                      srcDoc={previewHtml}
                      className="w-full rounded-xl bg-white shadow-2xl"
                      style={{ minHeight: "520px", height: "620px", border: "none", display: "block" }}
                      title="Email Preview"
                      sandbox="allow-same-origin"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-24 text-muted">
                    <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
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

export default function SendPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SendPageInner />
    </Suspense>
  );
}

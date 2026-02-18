"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: string;
}

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [filter, setFilter] = useState("All");
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [previewHtml, setPreviewHtml] = useState("");

  useEffect(() => {
    fetch("/api/templates")
      .then((r) => r.json())
      .then(setTemplates);
  }, []);

  const categories = ["All", ...Array.from(new Set(templates.map((t) => t.category)))];
  const filtered = filter === "All" ? templates : templates.filter((t) => t.category === filter);

  const openPreview = async (id: string) => {
    const res = await fetch("/api/preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        templateId: id,
        variables: { recipientName: "John", subject: "Preview Email", body: "This is a preview of how your email will look using this template." },
      }),
    });
    const data = await res.json();
    setPreviewHtml(data.html);
    setPreviewId(id);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight animate-fade-in">Email Templates</h1>
        <p className="text-muted mt-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          10 professionally crafted HTML templates for every use case
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === c
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-surface border border-border text-muted hover:text-foreground hover:border-primary/50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((t, i) => (
          <div
            key={t.id}
            className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${0.05 * i}s` }}
          >
            <div className={`h-32 ${t.preview} flex items-center justify-center`}>
              <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{t.name}</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{t.category}</span>
              </div>
              <p className="text-sm text-muted mb-4 leading-relaxed">{t.description}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => openPreview(t.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-surface-light hover:border-primary/50 transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  Preview
                </button>
                <Link
                  href={`/send?template=${t.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white hover:bg-primary-dark transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  Use Template
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {previewId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl bg-surface rounded-2xl border border-border overflow-hidden shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-error/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-success/60" />
                </div>
                <span className="text-sm font-medium">
                  {templates.find((t) => t.id === previewId)?.name}
                </span>
              </div>
              <button
                onClick={() => setPreviewId(null)}
                className="p-1.5 rounded-lg hover:bg-surface-light transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-4 max-h-[70vh] overflow-y-auto">
              <iframe
                srcDoc={previewHtml}
                className="w-full rounded-lg bg-white"
                style={{ minHeight: "500px", border: "none" }}
                title="Template Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

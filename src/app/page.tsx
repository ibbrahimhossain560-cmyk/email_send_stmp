import Link from "next/link";

const features = [
  { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "SMTP Powered", desc: "Send emails reliably through Brevo SMTP relay with enterprise-grade delivery." },
  { icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", title: "13 Templates", desc: "Choose from 13 professionally designed HTML email templates including dark mode, casual, and minimal styles." },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Instant Delivery", desc: "Emails are sent instantly through high-performance SMTP infrastructure." },
  { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Secure Auth", desc: "Password-protected email sending with token-based authentication for security." },
  { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Live Preview", desc: "Preview your email template in real-time before sending it out." },
  { icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12", title: "Vercel Ready", desc: "Deployed and optimized for Vercel with zero-config serverless functions." },
];

const stats = [
  { value: "13+", label: "Templates" },
  { value: "SMTP", label: "Powered" },
  { value: "100%", label: "Responsive" },
  { value: "Free", label: "Open Source" },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Built by Nafij Rahaman (@nafijrahaman) - Full Stack Developer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight animate-fade-in">
              Send Beautiful Emails
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
                with SMTP Power
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Professional email sender platform with 13 stunning HTML templates,
              powered by Brevo SMTP relay. Built by Nafij Rahaman with React, Next.js, TypeScript, and Node.js. 
              Fast, reliable, secure, and deploy-ready on Vercel.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/send"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Start Sending
              </Link>
              <Link
                href="/templates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-surface-light hover:border-primary/50 transition-all duration-300"
              >
                View Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-black text-primary">{s.value}</p>
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Everything You Need
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            A complete email sending solution with professional features
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Want to Work With Me?
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Get in touch for web development projects, collaborations, or any questions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-[#0d1117] border border-[#30363d] overflow-hidden shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="ml-4 text-[#8b949e] text-xs font-mono">contact@nafij — bash</div>
            </div>
            
            <div className="p-6 font-mono text-sm">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-[#7ee787] select-none">$</span>
                <div className="flex-1">
                  <span className="text-[#79c0ff]">curl</span>
                  <span className="text-[#ffa657]"> -X</span>
                  <span className="text-[#a5d6ff]"> contact</span>
                  <span className="text-[#ffa657]"> --developer</span>
                  <span className="text-[#a5d6ff]"> "Nafij Rahaman"</span>
                </div>
              </div>

              <div className="ml-6 space-y-2 text-[#c9d1d9]">
                <div className="flex items-center gap-3">
                  <span className="text-[#ff7b72]">Name:</span>
                  <span className="text-[#a5d6ff]">Nafij Rahaman</span>
                  <span className="text-[#8b949e]">(NafijThePro, NafijNinja)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#ff7b72]">Role:</span>
                  <span className="text-[#a5d6ff]">Full Stack Web Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#ff7b72]">Location:</span>
                  <span className="text-[#a5d6ff]">Bangladesh 🇧🇩</span>
                </div>
                <div className="flex items-start gap-3 mt-4 pt-3 border-t border-[#21262d]">
                  <span className="text-[#79c0ff]">Email:</span>
                  <div className="flex-1">
                    <a href="mailto:nafijthepro@gmail.com" className="text-[#58a6ff] hover:underline block">nafijthepro@gmail.com</a>
                    <a href="mailto:admin@nafij.me" className="text-[#58a6ff] hover:underline block mt-1">admin@nafij.me</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#79c0ff]">Website:</span>
                  <a href="https://nafij.me" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline">nafij.me</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#79c0ff]">GitHub:</span>
                  <a href="https://github.com/nafijrahaman" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline">@nafijrahaman</a>
                </div>
                <div className="flex items-start gap-3 mt-4 pt-3 border-t border-[#21262d]">
                  <span className="text-[#79c0ff]">Domains:</span>
                  <div className="flex-1 space-y-1">
                    <div className="text-[#a5d6ff]">• email.nafij.me</div>
                    <div className="text-[#a5d6ff]">• email.nafijrahaman.me</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-4 pt-4 border-t border-[#21262d]">
                <span className="text-[#7ee787] select-none">$</span>
                <div className="flex-1">
                  <span className="text-[#8b949e]"># Available for freelance projects and consultations</span>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-2">
                <span className="text-[#7ee787] animate-pulse select-none">▊</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted">
            <p>💡 Pro tip: You can also find me on <a href="https://facebook.com/nafijrahaman2023" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook</a> or call/WhatsApp: <a href="tel:+8801944955128" className="text-primary hover:underline">+880 1944955128</a></p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="rounded-3xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/10 border border-primary/20 p-8 sm:p-12 lg:p-16 text-center animate-pulse-glow">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Ready to Send Emails?
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-8">
              Choose a template, compose your message, and send it in seconds.
            </p>
            <Link
              href="/send"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

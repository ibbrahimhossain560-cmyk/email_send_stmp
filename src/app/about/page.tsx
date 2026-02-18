import Link from "next/link";

const skills = [
  "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript", "Python",
  "Tailwind CSS", "MongoDB", "Firebase", "Express.js", "Git", "HTML/CSS",
  "REST APIs", "MySQL", "Java", "Bootstrap", "Authentication", "Payment Integration",
];

const timeline = [
  { year: "2023 - Present", title: "Full Stack Web Developer", desc: "Building modern, responsive websites and full-stack applications using React, Next.js, Node.js, MongoDB, Python, and the MERN stack. Specializing in user authentication, payment integration, and clean UI/UX design." },
  { year: "2023 - Present", title: "Open Source Contributor", desc: "Actively contributing to open-source projects and creating innovative solutions on GitHub as @nafijrahaman." },
  { year: "Current", title: "Student at Magura Polytechnic Institute", desc: "Pursuing Diploma in Engineering while providing professional web development services." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-4">
              Full Stack Web Developer
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Nafij{" "}
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                Rahaman
              </span>
            </h1>
            <div className="space-y-4 text-muted leading-relaxed mb-6">
              <p>
                Hi, I'm Nafij. I'm a full-stack web developer who helps people and businesses bring their ideas online.
              </p>
              <p>
                I work with HTML, CSS, JavaScript, Python, Node.js, React, TypeScript, the MERN stack, and Java. That means I can handle everything from a simple responsive website to a complete web application with backend and database.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 my-4">
                <h3 className="font-bold text-foreground mb-2">What I can do for you:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Build modern, responsive websites that work on all devices</li>
                  <li>• Develop full-stack applications using React, Node.js, and MongoDB</li>
                  <li>• Create smooth, user-friendly interfaces</li>
                  <li>• Fix bugs or add features to existing projects</li>
                  <li>• Write clean, efficient, and maintainable code</li>
                </ul>
              </div>
              <p>
                <strong>Why work with me?</strong> I focus on delivering high-quality work, on time, with clear communication. 
                I keep things simple and practical, so you don't have to worry about unnecessary complexity. 
                My goal is to build something that actually works for you and your users.
              </p>
              <p className="text-sm">
                If you're looking for a reliable developer who takes projects seriously and is easy to work with, let's talk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://nafij.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                Portfolio
              </a>
              <a
                href="https://github.com/nafijrahaman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-light transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="text-lg font-bold mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted">Name</p>
                    <p className="text-sm font-medium">Nafij Rahaman</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted">Role</p>
                    <p className="text-sm font-medium">Full Stack Developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted">Education</p>
                    <p className="text-sm font-medium">Magura Polytechnic Institute</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted">Phone</p>
                    <p className="text-sm font-medium">+880 1944955128</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted">Location</p>
                    <p className="text-sm font-medium">Borobongram, Pangsha, Rajbari</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted">Email</p>
                    <p className="text-sm font-medium">admin@nafij.me</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8 animate-fade-in">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <span
              key={s}
              className="px-4 py-2 rounded-xl border border-border bg-surface text-sm font-medium hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default animate-fade-in"
              style={{ animationDelay: `${0.03 * i}s` }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8 animate-fade-in">Experience</h2>
        <div className="space-y-6">
          {timeline.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium w-fit">{t.year}</span>
                <h3 className="text-lg font-bold">{t.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="rounded-3xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/10 border border-primary/20 p-8 sm:p-12 text-center animate-pulse-glow">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
            About This Project
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-6 leading-relaxed">
            NR Mail is a full-stack email sender platform built with Next.js, TypeScript, and Tailwind CSS.
            It uses Brevo SMTP relay for reliable email delivery with 10 professional HTML templates.
            Fully responsive and deployed on Vercel.
          </p>
          <Link
            href="/send"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-all duration-300"
          >
            Try It Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/send", label: "Send Email" },
  { href: "/templates", label: "Templates" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("nrmail_token"));
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("nrmail_token");
    setLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white text-sm font-black">NR</span>
          <span className="hidden sm:inline">NR Mail</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === l.href
                  ? "bg-primary/15 text-primary"
                  : "text-muted hover:text-foreground hover:bg-surface-light"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className={`ml-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === "/login"
                  ? "bg-primary/15 text-primary"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
            >
              Login
            </Link>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  pathname === l.href
                    ? "bg-primary/15 text-primary"
                    : "text-muted hover:text-foreground hover:bg-surface-light"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {loggedIn ? (
              <button
                onClick={() => { handleLogout(); setOpen(false); }}
                className="px-4 py-3 rounded-lg text-sm font-medium text-left bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-all text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

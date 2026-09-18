import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon, MenuIcon, CloseIcon } from "./Icons.jsx";
import { GITHUB_URL, LINKEDIN_URL } from "../data/links.js";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <nav className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight text-white"
          >
            Raksha<span className="gradient-text">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-slate-300 transition-colors hover:text-white"
            >
              <GitHubIcon />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-300 transition-colors hover:text-white"
            >
              <LinkedInIcon />
            </a>
          </div>

          <button
            type="button"
            className="text-slate-200 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {open && (
          <div className="glass-panel mt-3 flex flex-col gap-1 rounded-2xl p-4 md:hidden animate-fade-up">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-5 border-t border-white/10 px-3 pt-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-slate-300 hover:text-white"
              >
                <GitHubIcon />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-slate-300 hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

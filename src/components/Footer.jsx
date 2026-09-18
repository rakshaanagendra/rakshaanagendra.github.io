import { GitHubIcon, LinkedInIcon } from "./Icons.jsx";
import { GITHUB_URL, LINKEDIN_URL } from "../data/links.js";

export default function Footer() {
  return (
    <footer className="relative px-5 pb-10 pt-4 sm:px-8">
      <div className="glass-panel mx-auto flex max-w-6xl flex-col items-center gap-4 rounded-2xl px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-slate-400">
          Built with React, Vite &amp; Tailwind CSS.
          <span className="hidden sm:inline"> · </span>
          <br className="sm:hidden" />© {new Date().getFullYear()} Raksha
          Nagendra
        </p>
        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <GitHubIcon />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <LinkedInIcon />
          </a>
          <a
            href="#top"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

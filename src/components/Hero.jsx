import { GitHubIcon, ArrowDownIcon } from "./Icons.jsx";
import { GITHUB_URL } from "../data/links.js";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-28 text-center sm:px-8"
    >
      <div className="glass-pill mb-6 animate-fade-up">
        <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
        M.Sc. AI Systems &amp; LLM Engineering · Universität Stuttgart
      </div>

      <h1
        className="max-w-4xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl animate-fade-up"
        style={{ animationDelay: "80ms" }}
      >
        Building AI systems that are
        <span className="gradient-text"> reliable, evaluable, and hard to break.</span>
      </h1>

      <p
        className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg animate-fade-up"
        style={{ animationDelay: "160ms" }}
      >
        I'm Raksha Nagendra — an AI / LLM / Agentic Systems Engineer who designs,
        builds, and rigorously evaluates production-grade RAG pipelines,
        multi-agent orchestration, and resilience-tested infrastructure end to
        end.
      </p>

      <div
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-up"
        style={{ animationDelay: "240ms" }}
      >
        <a href="#projects" className="btn-primary">
          View Projects
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 backdrop-blur-md transition-colors hover:text-white sm:flex"
      >
        <ArrowDownIcon className="h-4 w-4" />
      </a>
    </section>
  );
}

import Reveal from "./Reveal.jsx";
import { GitHubIcon, ExternalLinkIcon } from "./Icons.jsx";

export default function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal delay={80}>
      <article className="glass-card grid grid-cols-1 gap-8 p-7 sm:p-9 lg:grid-cols-5 lg:gap-10">
        <div
          className={`flex flex-col justify-center lg:col-span-2 ${
            reversed ? "lg:order-2" : ""
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
            Featured Project {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            {project.tagline}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3"
              >
                <div className="font-display text-lg font-semibold gradient-text">
                  {metric.value}
                </div>
                <div className="mt-1 text-[11px] leading-snug text-slate-500">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost mt-7 w-fit"
          >
            <GitHubIcon className="h-4 w-4" />
            View on GitHub
            <ExternalLinkIcon className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>

        <div className={`lg:col-span-3 ${reversed ? "lg:order-1" : ""}`}>
          <ul className="space-y-3.5">
            {project.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-slate-300 sm:text-[15px]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="glass-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

import Reveal from "./Reveal.jsx";

const STATS = [
  { value: "3", label: "production-grade AI systems shipped" },
  { value: "100%", label: "OOD detection accuracy (52/52 queries)" },
  { value: "92.9%", label: "critic-eval agreement with human labels" },
  { value: "4", label: "independent evaluation harnesses built" },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-kicker text-center">About</p>
          <h2 className="section-heading mt-3 text-center">
            End-to-end ownership, not just prompts.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass-card mt-12 p-8 sm:p-10">
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              I'm an M.Sc. Information Technology candidate specializing in AI
              Systems &amp; LLM Engineering at Universität Stuttgart, graduating
              November 2026 and looking for a Junior AI Application Engineer
              role. I like building the parts of LLM systems that most demos
              skip — hybrid retrieval that actually ranks well, multi-agent
              pipelines that know when to retry or abstain instead of
              hallucinating, and evaluation harnesses that ship with their own
              documented failure cases instead of cherry-picked wins.
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Across my projects I've diagnosed a deployment-breaking
              dependency left over from a mid-project model migration,
              root-caused a non-deterministic evaluation failure down to an
              unset temperature parameter, and built the guardrails —
              circuit breakers, egress boundaries, grounded abstention — that
              keep an AI system honest when something upstream inevitably
              goes wrong.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={150 + i * 80}>
              <div className="glass-card flex h-full flex-col items-center justify-center gap-2 px-4 py-7 text-center">
                <span className="font-display text-3xl font-semibold gradient-text">
                  {stat.value}
                </span>
                <span className="text-xs leading-snug text-slate-400 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal.jsx";
import skillCategories from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-kicker text-center">Skills</p>
          <h2 className="section-heading mt-3 text-center">
            Competencies, grouped by where they show up.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 90}>
              <div className="glass-card flex h-full flex-col gap-4 p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span key={tag} className="glass-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

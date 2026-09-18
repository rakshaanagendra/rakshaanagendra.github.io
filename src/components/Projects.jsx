import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-kicker text-center">Projects</p>
          <h2 className="section-heading mt-3 text-center">
            Systems built to fail loudly in testing, not silently in
            production.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

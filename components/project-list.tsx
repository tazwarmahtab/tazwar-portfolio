import { projects } from "../content/projects";
import { ProjectCard } from "./project-card";

export function ProjectList() {
  return (
    <section className="section" id="work">
      <div className="section-head" data-scroll-reveal>
        <div>
          <div className="kicker">SELECTED WORK / 03</div>
          <h2 className="section-title">
            Things
            <br />
            I build.
          </h2>
        </div>
        <p className="section-note">
          A small selection of systems and products. The portfolio prioritizes
          real implementation over inflated claims.
        </p>
      </div>
      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p.no} project={p} />
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Project } from "../content/projects";

function ProjectVisual({ label }: { label: string }) {
  return (
    <div className="project-visual" aria-hidden="true">
      <div className="diagram-line" />
      <div className="diagram">
        <div className="diagram-core">{label}</div>
      </div>
      <span className="visual-arrow">↗</span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { no, category, title, href, desc, status, stack, visual } = project;

  return (
    <article className="project" data-scroll-reveal>
      <div className="project-no">{no}</div>
      <div>
        <div className="kicker">{category}</div>
        {href === "#" ? (
          <h3 className="project-title">{title}</h3>
        ) : (
          <Link href={href}>
            <h3 className="project-title">
              {title}
              <span className="title-arrow">↗</span>
            </h3>
          </Link>
        )}
        <p className="project-desc">{desc}</p>
        <div className="project-meta">
          <span>{status}</span>
          <span>{stack}</span>
        </div>
      </div>
      {href === "#" ? (
        <ProjectVisual label={visual} />
      ) : (
        <Link
          href={href}
          className="project-visual-link"
          aria-label={`Open ${title} case study`}
        >
          <ProjectVisual label={visual} />
        </Link>
      )}
    </article>
  );
}

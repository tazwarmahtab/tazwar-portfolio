import Link from "next/link";
import { Motion, Magnetic } from "../components/motion/Motion";
import { SystemsMap } from "../components/systems/SystemsMap";
import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { PortraitAbout } from "../components/portrait-about";
import { projects } from "../content/projects";

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

export default function Home() {
  return (
    <Motion>
      <main>
        <div className="shell">
          <Navigation />
          <Hero />
          <PortraitAbout />

          <section className="section systems-section" id="systems">
            <div className="section-head" data-scroll-reveal>
              <div>
                <div className="kicker">SYSTEMS / 02</div>
                <h2 className="section-title">
                  I think
                  <br />
                  in systems.
                </h2>
              </div>
              <p className="section-note">
                Start with the problem. Model the workflow. Connect the tools.
                Give the system memory. Make the action observable.
              </p>
            </div>
            <SystemsMap />
          </section>

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
                A small selection of systems and products. The portfolio
                prioritizes real implementation over inflated claims.
              </p>
            </div>
            <div className="projects">
              {projects.map((p) => (
                <article className="project" key={p.no} data-scroll-reveal>
                  <div className="project-no">{p.no}</div>
                  <div>
                    <div className="kicker">{p.category}</div>
                    {p.href === "#" ? (
                      <h3 className="project-title">{p.title}</h3>
                    ) : (
                      <Link href={p.href}>
                        <h3 className="project-title">
                          {p.title}
                          <span className="title-arrow">↗</span>
                        </h3>
                      </Link>
                    )}
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-meta">
                      <span>{p.status}</span>
                      <span>{p.stack}</span>
                    </div>
                  </div>
                  {p.href === "#" ? (
                    <ProjectVisual label={p.visual} />
                  ) : (
                    <Link
                      href={p.href}
                      className="project-visual-link"
                      aria-label={`Open ${p.title} case study`}
                    >
                      <ProjectVisual label={p.visual} />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="section" data-scroll-reveal>
            <div className="section-head">
              <div>
                <div className="kicker">TECHNICAL STACK / 04</div>
                <h2 className="section-title">
                  Tools are
                  <br />
                  just tools.
                </h2>
              </div>
              <p className="section-note">
                Technologies are listed according to actual project use, not
                keyword stuffing.
              </p>
            </div>
            <div className="stack">
              {[
                [
                  "AI / AGENTS",
                  "LLM systems",
                  "Agent orchestration",
                  "Tool use",
                  "Memory systems",
                ],
                ["AUTOMATION", "Workflow design", "API integrations", "n8n"],
                ["SOFTWARE", "TypeScript", "React / Next.js", "Git / GitHub"],
                ["SYSTEMS", "Rust", "Tokio / Axum", "SQLite / SQLx"],
              ].map(([label, ...items]) => (
                <div className="stack-item" key={label}>
                  <div className="stack-label">{label}</div>
                  <div className="stack-value">
                    {items.map((x) => (
                      <div key={x}>{x}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="resume" data-scroll-reveal>
            <div className="section-head">
              <div>
                <div className="kicker">BUILD LOG / 05</div>
                <h2 className="section-title">
                  Build in
                  <br />
                  public.
                </h2>
              </div>
              <p className="section-note">
                Technical writing and deeper build notes will live here as they
                are published. No filler.
              </p>
            </div>
            <div className="log-list">
              <div className="log-row">
                <span>01</span>
                <strong>Building an AI agent that can actually act.</strong>
                <em>COMING SOON</em>
                <b>↗</b>
              </div>
              <div className="log-row">
                <span>02</span>
                <strong>Designing persistent memory for AI systems.</strong>
                <em>COMING SOON</em>
                <b>↗</b>
              </div>
            </div>
          </section>

          <section className="contact" id="contact" data-scroll-reveal>
            <div className="kicker">GET IN TOUCH / 06</div>
            <h2>
              Have a problem
              <br />
              worth automating?
            </h2>
            <Magnetic
              className="button button-fill"
              href="mailto:tazwarmahtab@gmail.com"
            >
              Start a conversation <span>↗</span>
            </Magnetic>
          </section>

          <footer className="footer">
            <span>Tazwar Mahtab</span>
            <span>AI Automation Engineer / Builder</span>
            <span>© 2026</span>
          </footer>
        </div>
      </main>
    </Motion>
  );
}

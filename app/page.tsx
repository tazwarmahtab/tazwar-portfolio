import { Motion } from "../components/motion/Motion";
import { SystemsMap } from "../components/systems/SystemsMap";
import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { PortraitAbout } from "../components/portrait-about";
import { ProjectList } from "../components/project-list";
import { BuildLog } from "../components/build-log";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

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

          <ProjectList />

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

          <BuildLog />
          <Contact />
          <Footer />
        </div>
      </main>
    </Motion>
  );
}

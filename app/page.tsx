import { Motion } from "../components/motion/Motion";
import { SystemsMap } from "../components/systems/SystemsMap";
import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { PortraitAbout } from "../components/portrait-about";
import { ProjectList } from "../components/project-list";
import { TechStack } from "../components/tech-stack";
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
          <TechStack />
          <BuildLog />
          <Contact />
          <Footer />
        </div>
      </main>
    </Motion>
  );
}

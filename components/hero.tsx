import { Magnetic } from "./motion/Motion";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <div className="kicker" data-reveal>
          AI AUTOMATION ENGINEER / BUILDER
        </div>
        <h1>
          <span data-reveal>I build systems</span>
          <span data-reveal>that run businesses</span>
          <span data-reveal>and automate work.</span>
        </h1>
      </div>
      <div className="hero-bottom" data-reveal>
        <p className="lede">
          I design and build AI automation systems, agentic workflows, and
          real-world software that solve operational problems.
        </p>
        <div className="hero-status">
          <span className="status-dot" /> AVAILABLE FOR WORK
          <br />
          <strong>Currently building Netso Energy</strong>
        </div>
        <div className="ctas">
          <Magnetic className="button button-fill" href="#work">
            View my work <span>↓</span>
          </Magnetic>
          <Magnetic className="button" href="#systems">
            See systems <span>↘</span>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

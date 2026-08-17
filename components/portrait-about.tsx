const pillars = [
  "SYSTEMS THINKER",
  "BUILDER",
  "BUSINESS MINDSET",
  "AI NATIVE",
];

const portraitSrc =
  "https://res.cloudinary.com/dzehajwt2/image/upload/f_auto,q_auto,w_900/tazwar-portfolio/portrait.jpg";

export function PortraitAbout() {
  return (
    <section className="section about-section" id="about" data-scroll-reveal>
      <div className="portrait-frame">
        <div className="portrait-image-wrap" data-pointer-media>
          <img
            src={portraitSrc}
            alt="Tazwar Mahtab — AI Automation Engineer & Builder"
            width={499}
            height={750}
            className="portrait-image"
            data-pointer-media-inner
            sizes="(max-width: 800px) 100vw, 40vw"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="about-copy">
        <div className="kicker">ABOUT / 01</div>
        <h2 className="section-title">
          Business first.
          <br />
          Systems second.
          <br />
          Build both.
        </h2>

        <div className="about-grid">
          <p>
            I started from the business side. Building my own ventures pushed me
            deeper into software, automation, AI agents, and systems
            architecture.
          </p>
          <p>
            That combination shapes how I work: understand the operational
            problem first, then build the smallest system that can solve it and
            keep improving it.
          </p>
        </div>

        <div className="principles">
          {pillars.map((x, i) => (
            <div className="principle" key={x}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

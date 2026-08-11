import { Magnetic } from "./motion/Motion";

export function Contact() {
  return (
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
  );
}

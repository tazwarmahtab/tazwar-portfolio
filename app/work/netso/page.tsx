import Link from "next/link";

const capabilities = [
  ["AI", "Gemini text chat + live native-audio interaction"],
  ["Voice", "16 kHz PCM input · 24 kHz output · browser audio pipeline"],
  ["Search", "Gemini tool use for electricity-rate/location research"],
  ["Frontend", "React + TypeScript hooks and service layer"],
];

export default function NetsoPage() {
  return (
    <main>
      <div className="shell">
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="/">
            Tazwar Mahtab
          </Link>
          <div className="navlinks">
            <Link href="/#work">Work</Link>
            <Link href="/#systems">Systems</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </nav>

        <section className="case-hero">
          <div className="kicker">02 / ENERGY / AI PRODUCT</div>
          <h1>
            Netso
            <br />
            Energy OS.
          </h1>
          <div className="case-intro">
            <p>
              An AI-enabled solar-energy product prototype exploring
              conversational assistance, live voice interaction, and grounded
              electricity-information retrieval.
            </p>
            <div className="case-meta">
              <span>STATUS</span>
              <strong>PROTOTYPE / ACTIVE DEVELOPMENT</strong>
              <span>ROLE</span>
              <strong>FOUNDER / BUILDER</strong>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">01 / SYSTEM</div>
          <div className="case-system">
            <div className="case-node">USER</div>
            <div className="case-arrow">↓</div>
            <div className="case-node emphasis">NETSO AI</div>
            <div className="case-arrow">↓</div>
            <div className="case-split">
              <div className="case-node">TEXT CHAT</div>
              <div className="case-node">LIVE VOICE</div>
              <div className="case-node">WEB SEARCH</div>
            </div>
            <div className="case-arrow">↓</div>
            <div className="case-node">GEMINI SERVICES</div>
          </div>
        </section>

        <section className="case-section two-col">
          <div>
            <div className="case-label">02 / WHAT IS REAL</div>
          </div>
          <div>
            <p className="case-lead">
              The repository is an AI Studio / Vite prototype with working Gemini
              integrations. It is not presented here as a production energy
              operating system.
            </p>
            <p>
              The implementation includes a Gemini text chat service, a
              browser-based live audio hook, and a search flow using Gemini’s
              Google Search tool for electricity-rate and location information.
            </p>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">03 / IMPLEMENTATION</div>
          <div className="system-table">
            {capabilities.map(([label, value]) => (
              <div className="system-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="case-section two-col">
          <div>
            <div className="case-label">04 / LIVE VOICE</div>
          </div>
          <div>
            <p className="case-lead">
              The prototype connects the browser microphone to Gemini Live using
              PCM audio and streams generated audio back through the Web Audio
              API.
            </p>
            <p>
              The implementation handles connection state, microphone capture,
              PCM encoding, streamed audio decoding, playback scheduling,
              interruption handling, and cleanup.
            </p>
          </div>
        </section>

        <section className="case-section two-col">
          <div>
            <div className="case-label">05 / GROUNDED SEARCH</div>
          </div>
          <div>
            <p className="case-lead">
              The search service uses Gemini with a Google Search tool to
              retrieve current electricity-rate or location information and
              exposes grounding metadata for source display.
            </p>
            <p>
              This is deliberately described as a prototype capability. It is not
              a claim that the portfolio itself provides authoritative tariff
              data.
            </p>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">06 / CURRENT STATUS</div>
          <div className="status-box">
            <strong>PROTOTYPE / ACTIVE DEVELOPMENT</strong>
            <span>
              AI product prototype. The broader Netso Energy business is separate
              from the maturity of this software repository.
            </span>
          </div>
        </section>

        <section className="case-footer">
          <Link
            className="button"
            href="https://github.com/tazwarmahtab/netso-mvp"
          >
            View source on GitHub
          </Link>
          <Link className="button" href="/#work">
            Back to selected work
          </Link>
        </section>

        <footer className="footer">
          <span>Tazwar Mahtab</span>
          <span>AI Automation Engineer / Builder</span>
          <span>© 2026</span>
        </footer>
      </div>
    </main>
  );
}

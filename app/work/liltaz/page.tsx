import Link from "next/link";

const systems = [
  ["Channels", "Telegram · WhatsApp · Gmail"],
  ["Runtime", "Rust · Tokio · Axum"],
  ["Memory", "SQLite / SQLx · SurrealDB"],
  ["Intelligence", "LLM provider abstraction · Groq · NVIDIA NIM"],
  ["Tools", "MCP · filesystem · shell · web search"],
  ["Safety", "HMAC verification · API keys · WASM/WASI sandboxing"],
];

export default function LilTazPage() {
  return (
    <main>
      <div className="shell">
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="/">Tazwar Mahtab</Link>
          <div className="navlinks"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></div>
        </nav>

        <section className="case-hero">
          <div className="kicker">01 / AI AGENTS / SYSTEMS</div>
          <h1>LilTaz /<br />OpenClaw.</h1>
          <div className="case-intro">
            <p>A multi-channel AI agent system exploring persistent memory, tool execution, LLM provider abstraction, voice and vision, webhooks, and sandboxed execution.</p>
            <div className="case-meta"><span>STATUS</span><strong>ACTIVE DEVELOPMENT</strong><span>ROLE</span><strong>BUILDER / ARCHITECT</strong></div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">01 / THE SYSTEM</div>
          <div className="case-system">
            <div className="case-node">TELEGRAM</div><div className="case-arrow">↓</div><div className="case-node emphasis">MESSAGE ROUTER</div><div className="case-arrow">↓</div><div className="case-node emphasis">AGENT / CORTEX</div><div className="case-arrow">↓</div><div className="case-split"><div className="case-node">MEMORY</div><div className="case-node">TOOLS</div><div className="case-node">LLMs</div></div>
          </div>
        </section>

        <section className="case-section two-col">
          <div><div className="case-label">02 / PROBLEM</div></div>
          <div><p className="case-lead">A personal assistant becomes more useful when it can receive work through the channels people already use, retain context, call tools, and route tasks through a coherent runtime.</p><p>The project explores how those pieces fit together as a single system rather than a collection of disconnected chatbot integrations.</p></div>
        </section>

        <section className="case-section">
          <div className="case-label">03 / IMPLEMENTATION</div>
          <div className="system-table">{systems.map(([label, value]) => <div className="system-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        </section>

        <section className="case-section two-col">
          <div><div className="case-label">04 / ENGINEERING DECISIONS</div></div>
          <div><p className="case-lead">The architecture separates channel adapters, agent execution, memory, tools, and provider integrations so individual pieces can evolve without rewriting the entire runtime.</p><p>Rust provides the core runtime and async execution model. Persistent stores provide different layers of memory. Tool access is treated as an explicit capability rather than unrestricted process access.</p></div>
        </section>

        <section className="case-section two-col">
          <div><div className="case-label">05 / SECURITY</div></div>
          <div><p className="case-lead">Security is part of the architecture, not a final checklist.</p><p>The repository includes webhook verification, API-key authentication, security guards, and sandboxing-related infrastructure. The portfolio deliberately describes these as implemented project components, not as a claim that the system is production-hardened.</p></div>
        </section>

        <section className="case-section">
          <div className="case-label">06 / CURRENT STATUS</div>
          <div className="status-box"><strong>ACTIVE DEVELOPMENT</strong><span>Advanced prototype / engineering project. Production readiness is not claimed.</span></div>
        </section>

        <section className="case-footer"><Link className="button" href="https://github.com/tazwarmahtab/LilTaz">View source on GitHub</Link><Link className="button" href="/">Back to selected work</Link></section>
        <footer className="footer"><span>Tazwar Mahtab</span><span>AI Automation Engineer / Builder</span><span>© 2026</span></footer>
      </div>
    </main>
  );
}

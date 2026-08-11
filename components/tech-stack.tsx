const stacks = [
  {
    label: "AI / AGENTS",
    items: ["LLM systems", "Agent orchestration", "Tool use", "Memory systems"],
  },
  {
    label: "AUTOMATION",
    items: ["Workflow design", "API integrations", "n8n"],
  },
  {
    label: "SOFTWARE",
    items: ["TypeScript", "React / Next.js", "Git / GitHub"],
  },
  {
    label: "SYSTEMS",
    items: ["Rust", "Tokio / Axum", "SQLite / SQLx"],
  },
];

export function TechStack() {
  return (
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
          Technologies are listed according to actual project use, not keyword
          stuffing.
        </p>
      </div>
      <div className="stack">
        {stacks.map(({ label, items }) => (
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
  );
}

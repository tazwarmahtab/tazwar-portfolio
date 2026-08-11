import Link from "next/link";

const projects = [
  {
    no: "01",
    category: "AI AGENTS / SYSTEMS",
    title: "LilTaz / OpenClaw",
    href: "/work/liltaz",
    desc: "A multi-channel AI agent system exploring persistent memory, tool execution, LLM provider abstraction, voice and vision, webhooks, and sandboxed execution.",
    status: "ACTIVE DEVELOPMENT",
    stack: "Rust · Tokio · Axum · SQLite · SurrealDB · MCP",
    visual: "AGENT CORE",
  },
  {
    no: "02",
    category: "ENERGY / AI PRODUCT",
    title: "Netso Energy OS",
    href: "/work/netso",
    desc: "An AI-enabled solar-energy product prototype exploring conversational assistance, live voice interaction, and grounded electricity-information retrieval.",
    status: "PROTOTYPE / ACTIVE DEVELOPMENT",
    stack: "React · TypeScript · Gemini · Web Audio",
    visual: "NETSO AI",
  },
  {
    no: "03",
    category: "MOBILITY / PRODUCT",
    title: "TransitBD",
    href: "#",
    desc: "A Bangladesh-focused multimodal transit platform concept for discovering and navigating transportation options across fragmented modes.",
    status: "CONCEPT / DEVELOPMENT",
    stack: "Product architecture · Platform design",
    visual: "TRANSIT",
  },
];

function ProjectVisual({ label }: { label: string }) {
  return (
    <div className="project-visual" aria-hidden="true">
      <div className="diagram-line" />
      <div className="diagram"><div className="diagram-core">{label}</div></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="shell">
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="#top">Tazwar Mahtab</Link>
          <div className="navlinks"><Link href="#work">Work</Link><Link href="#about">About</Link><Link href="#resume">Build Log</Link><Link href="#contact">Contact</Link></div>
        </nav>

        <section className="hero" id="top">
          <div>
            <div className="kicker">TAZWAR MAHTAB / AI AUTOMATION ENGINEER</div>
            <h1><span>I build AI agents,</span><span>automation systems,</span><span>and software.</span></h1>
          </div>
          <div className="hero-bottom">
            <p className="lede">I turn complex operations into intelligent workflows, combining systems thinking, automation, software, and AI agents.</p>
            <div className="ctas"><a className="button" href="#work">View selected work</a><a className="button" href="https://github.com/tazwarmahtab">GitHub</a></div>
          </div>
        </section>

        <section className="section" aria-label="Capabilities">
          <div className="capabilities">{["AI AGENTS","WORKFLOW AUTOMATION","API INTEGRATIONS","SYSTEMS ARCHITECTURE","PRODUCT ENGINEERING"].map(x => <div className="cap" key={x}>{x}</div>)}</div>
        </section>

        <section className="section" id="work">
          <div className="section-head"><h2 className="section-title">Selected<br/>work.</h2><p className="section-note">A small selection of systems and products I am building. The portfolio prioritizes real implementation over inflated claims.</p></div>
          <div className="projects">
            {projects.map(p => <article className="project" key={p.no}>
              <div className="project-no">{p.no}</div>
              <div>
                <div className="kicker">{p.category}</div>
                {p.href === "#" ? <h3 className="project-title">{p.title}</h3> : <Link href={p.href}><h3 className="project-title">{p.title}</h3></Link>}
                <p className="project-desc">{p.desc}</p>
              </div>
              <div className="project-meta"><div>{p.status}</div><br/><div>{p.stack}</div></div>
              {p.href === "#" ? <ProjectVisual label={p.visual}/> : <Link href={p.href} className="project-visual-link" aria-label={`Open ${p.title} case study`}><ProjectVisual label={p.visual}/></Link>}
            </article>)}
          </div>
        </section>

        <section className="section">
          <div className="system-grid">
            <div className="system-copy"><div className="kicker">SYSTEMS / 01</div><h2 className="section-title">I think<br/>in systems.</h2><p>Start with the problem. Model the workflow. Connect the tools. Give the system memory. Make the action observable.</p></div>
            <div className="system-visual" aria-label="Example system architecture"><div className="flow"><div className="flow-row"><div className="node">PROBLEM</div><div className="node">USER</div></div><div className="flow-row"><div className="node">ORCHESTRATOR</div><div className="node">AGENT</div></div><div className="flow-row"><div className="node">TOOLS + APIs</div><div className="node">MEMORY</div></div><div className="flow-row"><div className="node">ACTION</div><div className="node">OBSERVABILITY</div></div></div></div>
          </div>
        </section>

        <section className="section">
          <div className="section-head"><h2 className="section-title">Technical<br/>stack.</h2><p className="section-note">Technologies are listed according to actual project use, not keyword stuffing.</p></div>
          <div className="stack"><div className="stack-item"><div className="stack-label">AI / AGENTS</div><div className="stack-value">LLM systems<br/>Agent orchestration<br/>Tool use<br/>Memory systems</div></div><div className="stack-item"><div className="stack-label">AUTOMATION</div><div className="stack-value">Workflow design<br/>API integrations<br/>n8n</div></div><div className="stack-item"><div className="stack-label">SOFTWARE</div><div className="stack-value">TypeScript<br/>React / Next.js<br/>Git / GitHub</div></div><div className="stack-item"><div className="stack-label">SYSTEMS</div><div className="stack-value">Rust<br/>Tokio / Axum<br/>SQLite / SQLx</div></div></div>
        </section>

        <section className="section" id="about">
          <div className="section-head"><h2 className="section-title">Business first.<br/>Systems second.<br/>Build both.</h2></div>
          <div className="about-grid"><p>I started from the business side. Building my own ventures pushed me deeper into software, automation, AI agents, and systems architecture.</p><p>That combination shapes how I work: understand the operational problem first, then build the smallest system that can solve it and keep improving it.</p></div>
          <div className="principles">{["BUILD FROM THE PROBLEM","PROVE WITH SYSTEMS","AUTOMATE REPEATABLE WORK","DOCUMENT DECISIONS","SHIP IN ITERATIONS"].map((x,i)=><div className="principle" key={x}>{String(i+1).padStart(2,"0")} &nbsp; {x}</div>)}</div>
        </section>

        <section className="section" id="resume">
          <div className="section-head"><h2 className="section-title">Build log.</h2><p className="section-note">Technical writing and deeper build notes will live here as they are published.</p></div>
          <div className="projects"><div className="project"><div className="project-no">01</div><div><div className="kicker">COMING SOON</div><h3 className="project-title">Building an AI agent that can actually act.</h3></div><div className="project-meta">NOT PUBLISHED</div></div><div className="project"><div className="project-no">02</div><div><div className="kicker">COMING SOON</div><h3 className="project-title">Designing persistent memory for AI systems.</h3></div><div className="project-meta">NOT PUBLISHED</div></div></div>
        </section>

        <section className="contact" id="contact"><div className="kicker">GET IN TOUCH</div><h2>Have a problem worth automating?</h2><div className="ctas"><a className="button" href="https://github.com/tazwarmahtab">GitHub</a></div></section>
        <footer className="footer"><span>Tazwar Mahtab</span><span>AI Automation Engineer / Builder</span><span>© 2026</span></footer>
      </div>
    </main>
  );
}

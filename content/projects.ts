export interface Project {
  no: string;
  category: string;
  title: string;
  href: string;
  desc: string;
  status: string;
  stack: string;
  visual: string;
}

export const projects: Project[] = [
  {
    no: "01",
    category: "AI + ENERGY INFRASTRUCTURE",
    title: "Netso Energy OS",
    href: "/work/netso",
    desc: "An AI-enabled solar-energy product prototype exploring conversational assistance, live voice interaction, and grounded electricity-information retrieval.",
    status: "PROTOTYPE / ACTIVE DEVELOPMENT",
    stack: "React · TypeScript · Gemini · Web Audio",
    visual: "NETSO AI",
  },
  {
    no: "02",
    category: "AI AGENTS / SYSTEMS",
    title: "LilTaz",
    href: "/work/liltaz",
    desc: "Autonomous AI agent infrastructure exploring persistent memory, tool execution, LLM provider abstraction, voice and vision, webhooks, and sandboxed execution.",
    status: "ACTIVE DEVELOPMENT",
    stack: "Rust · Tokio · Axum · SQLite · SurrealDB · MCP",
    visual: "AGENT CORE",
  },
  {
    no: "03",
    category: "MOBILITY / PLATFORM",
    title: "TransitBD",
    href: "#",
    desc: "A Bangladesh-focused multimodal transit platform concept for discovering and navigating transportation options across fragmented modes.",
    status: "CONCEPT / DEVELOPMENT",
    stack: "Product architecture · Platform design",
    visual: "TRANSIT",
  },
];

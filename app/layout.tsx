import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tazwar Mahtab — AI Automation Engineer & Builder",
  description:
    "AI automation engineer and builder focused on AI agents, workflow automation, APIs, and intelligent business systems.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

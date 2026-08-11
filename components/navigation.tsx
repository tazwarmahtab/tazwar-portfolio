import Link from "next/link";
import { Magnetic } from "./motion/Motion";

export function Navigation() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <Link className="brand" href="#top">
        Tazwar Mahtab
      </Link>
      <div className="navlinks">
        <Link href="#work">Work</Link>
        <Link href="#systems">Systems</Link>
        <Link href="#about">About</Link>
        <Link href="#resume">Build Log</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <Magnetic className="nav-action" href="#work">
        View Projects <span>↗</span>
      </Magnetic>
    </nav>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import css from "@/app/page.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#links", label: "Connect" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeMenu = () => setIsOpen(false);

  // Close the mobile menu on Escape or a tap outside the nav.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  return (
    <nav className={css.nav} ref={navRef} aria-label="Main">
      <div className={css["nav-container"]}>
        <a href="#top" className={css.logo}>
          &lt;AB /&gt;
          <span className={css["visually-hidden"]}> Back to top</span>
        </a>
        <button
          type="button"
          className={`${css["nav-toggle"]} ${
            isOpen ? css["nav-toggle-open"] : ""
          }`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          id="nav-menu"
          className={`${css["nav-menu"]} ${
            isOpen ? css["nav-menu-open"] : ""
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

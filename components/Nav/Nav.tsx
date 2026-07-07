"use client";

import { useState } from "react";
import css from "@/app/page.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={css.nav}>
      <div className={css["nav-container"]}>
        <div className={css.logo}>&lt;AB /&gt;</div>
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
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

"use client";
import css from "@/app/page.module.css";
import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={css.footer}>
      <div className={css["footer-content"]}>
        <div className={css["footer-brand"]}>
          <h3>&lt;AB /&gt;</h3>
          <p>
            Crafting scalable web applications with React, Next.js, and Node.js.
            Focused on performance, clean code, and cloud technologies.
          </p>
        </div>
        <div className={css["footer-links"]}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={css["footer-links"]}>
          <h4>Connect</h4>
          <ul>
            <li>
              <Link href="https://github.com/AndriiButenko05" target="_blank">
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/andriibutenkodeveloper/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="mailto:andrejbutik@gmail.com">Email</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={css["footer-bottom"]}>
        <p>
          &copy; {currentYear} Andrii Butenko Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

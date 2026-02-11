import css from "@/app/page.module.css";

export default function Nav() {
  return (
    <nav className={css.nav}>
      <div className={css["nav-container"]}>
        <div className={css.logo}>&lt;AB /&gt;</div>
        <ul className={css["nav-menu"]}>
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
    </nav>
  );
}

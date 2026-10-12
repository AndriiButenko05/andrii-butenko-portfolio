import css from "@/app/page.module.css";
import HeroLanyard from "@/components/Lanyard/HeroLanyard";

export default function Hero() {
  return (
    <section className={css.hero}>
      <HeroLanyard />
      <div className={css.container}>
        <div className={css["hero-content"]}>
          <div className={css["hero-label"]}>
            React, TypeScript, Performance
          </div>
          <h1>
            Andrii
            <span className={css.highlight}>Butenko</span>
          </h1>
          <p>
            Frontend Developer with 1.5+ years of commercial experience in
            React and TypeScript across an outsourced multi-brand platform (30+
            locales), a regulated online casino platform, a multi-module CRM
            and a healthcare application.
          </p>
          <div className={css["cta-group"]}>
            <a href="#projects" className={`${css.btn} ${css["btn-primary"]}`}>
              <span>View My Work</span>
            </a>
            <a href="#contact" className={`${css.btn} ${css["btn-secondary"]}`}>
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

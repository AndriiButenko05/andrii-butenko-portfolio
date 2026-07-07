import css from "@/app/page.module.css";
export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css["hero-content"]}>
          <div className={css["hero-label"]}>Frontend Developer</div>
          <h1>
            Building Fast,
            <span className={css.highlight}>Accessible Interfaces</span>
          </h1>
          <p>
            Frontend developer specializing in React, TypeScript, and
            Next.js — with commercial experience across a multi-module CRM
            platform, a HIPAA-compliant healthcare app, and a client site
            delivered solo from requirements to launch.
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

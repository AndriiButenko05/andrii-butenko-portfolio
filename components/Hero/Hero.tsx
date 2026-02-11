import css from "@/app/page.module.css";
export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css["hero-content"]}>
          <div className={css["hero-label"]}>FullStack Developer</div>
          <h1>
            Building Modern
            <span className={css.highlight}>Web Applications</span>
          </h1>
          <p>
            Specialized in the JavaScript ecosystem (React, Next.js, Node.js).
            Combining academic foundations in Cloud Development with practical
            coding skills.
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

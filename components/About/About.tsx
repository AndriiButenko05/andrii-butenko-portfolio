import css from "@/app/page.module.css";
import Image from "next/image";
export default function About() {
  return (
    <section className={css.about} id="about">
      <div className={css["about-container"]}>
        <Image
          src="/andrii-butenko-transparent.png"
          alt="Photo of Andrii Butenko"
          height={600}
          width={431}
          className={css["about-image"]}
        />

        <div className={css["about-content"]}>
          <h2>
            Fullstack <span className={css.highlight}>Developer</span>
          </h2>
          <p>
            I am a Fullstack Developer based in Wroclaw. Currently pursuing a
            degree in Cloud Application Development at WSB Merito University, I
            combine strong academic foundations with practical skills gained
            through intensive bootcamp training and real-world projects.
          </p>
          <p>
            My focus is on building scalable web applications using the MERN
            stack and Next.js. I am passionate about writing clean code, solving
            complex problems, and constantly learning new technologies to
            deliver seamless user experiences.
          </p>

          <div className={css.skills}>
            <div className={css["skill-item"]}>
              <h4>Frontend</h4>
              <p>React, Javascript/TypeScript, Next.js, Tailwind CSS</p>
            </div>
            <div className={css["skill-item"]}>
              <h4>Backend</h4>
              <p>Node.js, Express, REST API</p>
            </div>
            <div className={css["skill-item"]}>
              <h4>Database</h4>
              <p>MongoDB, Mongoose</p>
            </div>
            <div className={css["skill-item"]}>
              <h4>Tools</h4>
              <p>Git, Figma, Postman, Windows, Agile/Scrum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

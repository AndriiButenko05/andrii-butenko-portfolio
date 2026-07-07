import css from "@/app/page.module.css";
import Image from "next/image";
import skillsData from "@/public/data/skills.json";
import { SkillGroup } from "@/types/skills";

const skillGroups = skillsData.skills as SkillGroup[];

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
          priority
        />

        <div className={css["about-content"]}>
          <h2>
            Frontend <span className={css.highlight}>Developer</span>
          </h2>
          <p>
            I&apos;m a Frontend Developer based in Wrocław, with a B.Sc. in
            Cloud Application Development from WSB Merito University (2026). I
            combine that foundation with hands-on experience shipping
            production features across CRM and healthcare platforms.
          </p>
          <p>
            My focus is building performant, accessible interfaces with React,
            TypeScript, and Next.js — with enough backend fluency in Node.js
            and Nest.js to own a feature end-to-end, from UI to API.
          </p>

          <div className={css.skills}>
            {skillGroups.map((group) => (
              <div key={group.id} className={css["skill-item"]}>
                <h4>{group.label}</h4>
                <p>{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

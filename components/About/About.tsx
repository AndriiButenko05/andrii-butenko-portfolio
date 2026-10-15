import css from "@/app/page.module.css";
import skillsData from "@/public/data/skills.json";
import { SkillGroup } from "@/types/skills";
import AboutProfileCard from "@/components/ProfileCard/AboutProfileCard";

const skillGroups = skillsData.skills as SkillGroup[];

const coreStack = [
  "JavaScript / TypeScript",
  "React",
  "Next.js",
  "Astro",
  "Redux Toolkit",
  "Tailwind CSS",
  "HTML / CSS",
  "Node.js",
];

export default function About() {
  return (
    <section className={css.about} id="about">
      <div className={css["about-container"]}>
        <div className={css["about-card"]}>
          <AboutProfileCard />
        </div>

        <div className={css["about-content"]}>
          <h2>
            Frontend <span className={css.highlight}>Developer</span>
          </h2>
          <p>
            Ship product features and UI across the whole frontend: components,
            state management, API integration and responsive layouts, while
            keeping performance and code quality high (Lighthouse 100, main
            bundle cut by 45%). Comfortable making backend changes in NestJS
            and Spring Boot.
          </p>
          <p>
            Used to working in cross-functional teams of up to 7 engineers with
            designers and product owners. Based in Wrocław, open to remote.
          </p>
          <p className={css["core-stack"]}>
            <span>Core stack</span>
            {coreStack.join(" • ")}
          </p>

          <div className={css.skills}>
            {skillGroups.map((group) => (
              <div key={group.id} className={css["skill-item"]}>
                <h3>{group.label}</h3>
                <p>
                  {group.items.join(", ")}
                  {group.extra && `, ${group.extra.join(", ")}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import css from "@/app/page.module.css";
import experienceData from "@/public/data/experience.json";
import { ExperienceEntry } from "@/types/experience";

const experience = experienceData.experience as ExperienceEntry[];

export default function Experience() {
  return (
    <section className={css.experience} id="experience">
      <div className={css["section-header"]}>
        <div className={css["section-label"]}>Career Journey</div>
        <h2 className={css["section-title"]}>Work Experience</h2>
      </div>

      <div className={css["experience-list"]}>
        {experience.map((entry) => (
          <article key={entry.id} className={css["experience-card"]}>
            <div className={css["experience-heading"]}>
              <div>
                <h3>{entry.role}</h3>
                <p className={css["experience-company"]}>
                  {entry.companyLink ? (
                    <a
                      href={entry.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {entry.company}
                    </a>
                  ) : (
                    entry.company
                  )}
                </p>
              </div>
              <span className={css["experience-period"]}>{entry.period}</span>
            </div>
            <p className={css["experience-context"]}>{entry.context}</p>
            <ul className={css["experience-achievements"]}>
              {entry.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

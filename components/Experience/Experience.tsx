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

      {/* Native <details>: keyboard and screen-reader support with no JS, and every
          role stays in the HTML. The current (first) role starts open; the shared
          `name` makes them exclusive, so opening one role closes the other. */}
      <div className={css["exp-accordion"]}>
        {experience.map((entry, index) => (
          <details
            key={entry.id}
            name="experience"
            className={css["exp-item"]}
            open={index === 0}
          >
            <summary className={css["exp-summary"]}>
              <div>
                <h3>{entry.role}</h3>
                {entry.company && (
                  <p className={css["experience-company"]}>{entry.company}</p>
                )}
              </div>
              <div className={css["exp-summary-meta"]}>
                <div className={css["experience-dates"]}>
                  <span className={css["experience-period"]}>
                    {entry.period}
                  </span>
                  <span className={css["experience-employment"]}>
                    {entry.employment}
                  </span>
                </div>
                <svg
                  className={css["exp-chevron"]}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </summary>

            <div className={css["exp-body"]}>
              <p className={css["experience-context"]}>{entry.context}</p>
              {entry.links && (
                <p className={css["experience-links"]}>
                  {entry.links.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 && " • "}
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              )}
              {entry.team && (
                <p className={css["experience-team"]}>
                  <span>Team:</span> {entry.team}
                </p>
              )}
              <div className={css["experience-stack"]}>
                {entry.stack.map((tech) => (
                  <span key={tech} className={css.tag}>
                    {tech}
                  </span>
                ))}
              </div>
              <ul className={css["experience-achievements"]}>
                {entry.achievements.map((achievement, i) => (
                  <li key={i}>
                    {typeof achievement === "string" ? (
                      achievement
                    ) : (
                      <>
                        <strong>{achievement.label}:</strong> {achievement.text}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

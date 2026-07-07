import css from "@/app/page.module.css";
import educationData from "@/public/data/education.json";
import languagesData from "@/public/data/languages.json";
import { EducationEntry, CertificateEntry } from "@/types/education";
import { LanguageEntry } from "@/types/language";

const education = educationData.education as EducationEntry[];
const certificates = educationData.certificates as CertificateEntry[];
const languages = languagesData.languages as LanguageEntry[];

export default function Education() {
  return (
    <section className={css.education} id="education">
      <div className={css["section-header"]}>
        <div className={css["section-label"]}>Credentials</div>
        <h2 className={css["section-title"]}>Education &amp; Languages</h2>
      </div>

      <div className={css["education-grid"]}>
        <div className={css["education-column"]}>
          <h3>Education</h3>
          {education.map((entry) => (
            <div key={entry.id} className={css["education-item"]}>
              <h4>{entry.credential}</h4>
              <p>{entry.institution}</p>
              <span className={css["education-period"]}>{entry.period}</span>
            </div>
          ))}
        </div>

        <div className={css["education-column"]}>
          <h3>Certificates</h3>
          {certificates.map((cert) => (
            <div key={cert.id} className={css["education-item"]}>
              <h4>{cert.name}</h4>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className={css["education-column"]}>
          <h3>Languages</h3>
          <div className={css["languages-list"]}>
            {languages.map((lang) => (
              <div key={lang.id} className={css["language-item"]}>
                <span>{lang.name}</span>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

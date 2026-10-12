"use client";

import css from "@/app/page.module.css";
import LogoLoop, { LogoItem } from "@/components/LogoLoop/LogoLoop";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiSass,
  SiNodedotjs,
  SiNestjs,
  SiSpringboot,
  SiVite,
  SiCloudflare,
  SiSentry,
  SiDocker,
  SiFigma,
  SiGit,
} from "react-icons/si";

const techLogos: LogoItem[] = [
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiAstro />, title: "Astro" },
  { node: <SiRedux />, title: "Redux Toolkit" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiCss />, title: "CSS" },
  { node: <SiSass />, title: "SASS" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiNestjs />, title: "Nest.js" },
  { node: <SiSpringboot />, title: "Spring Boot" },
  { node: <SiVite />, title: "Vite" },
  { node: <SiCloudflare />, title: "Cloudflare" },
  { node: <SiSentry />, title: "Sentry" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiFigma />, title: "Figma" },
  { node: <SiGit />, title: "Git" },
];

export default function TechStack() {
  return (
    <section className={css["tech-stack"]}>
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={36}
        gap={64}
        hoverSpeed={15}
        scaleOnHover
        fadeOut
        fadeOutColor="#0f0f0f"
        ariaLabel="Technologies I work with"
      />
    </section>
  );
}

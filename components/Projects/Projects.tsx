"use client";

import { useState, useRef } from "react";
import css from "@/app/page.module.css";
import projectsData from "@/public/data/projects.json";
import { Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";
import TargetCursor from "@/components/TargetCursor/TargetCursor";

const projects = projectsData.projects as Project[];
const PAGE_SIZE = 3;

function ProjectImage({ project, index }: { project: Project; index: number }) {
  const image = (
    <Image
      className={`${css["project-image"]} ${css[`project-image-${(index % 3) + 1}`]}`}
      style={
        project.gradientColors
          ? {
              background: `linear-gradient(135deg, ${project.gradientColors[0]} 0%, ${project.gradientColors[1]} 100%)`,
            }
          : {}
      }
      src={project.icon}
      alt={project.alt}
      width={1000}
      height={522}
      sizes="(min-width: 1024px) 440px, (min-width: 768px) 50vw, 100vw"
    />
  );

  if (!project.live) return image;

  return (
    <Link
      href={project.live}
      className={css["project-image-link"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      {image}
    </Link>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [projectsToShow, setProjectsToShow] = useState(PAGE_SIZE);

  const displayedProjects = projects.slice(0, projectsToShow);
  const hasMore = projectsToShow < projects.length;

  const loadMore = () => {
    setProjectsToShow((prev) => prev + PAGE_SIZE);
  };

  return (
    <section className={css.projects} id="projects" ref={sectionRef}>
      <TargetCursor
        container={sectionRef}
        cursorColor="#d95d39"
        blendMode="normal"
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
      />
      <div className={css["section-header"]}>
        <div className={css["section-label"]}>Featured Work</div>
        <h2 className={css["section-title"]}>Recent Projects</h2>
      </div>

      <div className={css["projects-grid"]}>
        {displayedProjects.map((project, index) => (
          <div
            key={project.id || index}
            className={`${css["project-card"]} cursor-target`}
            data-cursor-label={project.title}
          >
            <ProjectImage project={project} index={index} />
            <div className={css["project-content"]}>
              <div className={css["project-tags"]}>
                {project.tags &&
                  project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={css.tag}>
                      {tag}
                    </span>
                  ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={css["project-links"]}>
                {project.link && (
                  <Link
                    href={project.link}
                    className={`${css["project-link"]} cursor-target`}
                    data-cursor-label="Code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    className={`${css["live-link"]} cursor-target`}
                    data-cursor-label="Live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className={css["load-more-container"]}>
          <button
            onClick={loadMore}
            className={`${css["btn-load-more"]} cursor-target`}
            data-cursor-label="More"
          >
            <span>Load More Projects</span>
          </button>
        </div>
      )}
    </section>
  );
}

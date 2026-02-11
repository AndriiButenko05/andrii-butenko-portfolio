"use client";

import { useState, useEffect } from "react";
import css from "@/app/page.module.css"; // Ensure this path is correct
import { Project } from "@/types/project";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [projectsToShow, setProjectsToShow] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch("/data/projects.json");
        const data = await response.json();
        setProjects(data.projects);
        setDisplayedProjects(data.projects.slice(0, projectsToShow));
        setLoading(false);
      } catch (error) {
        console.error("Error loading projects:", error);
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    setDisplayedProjects(projects.slice(0, projectsToShow));
  }, [projectsToShow, projects]);

  const loadMore = () => {
    setProjectsToShow((prev) => prev + 3);
  };

  const hasMore = projectsToShow < projects.length;

  if (loading) {
    return (
      <section className={css.projects} id="projects">
        <div className={css["section-header"]}>
          <div className={css["section-label"]}>Featured Work</div>
          <h2 className={css["section-title"]}>Recent Projects</h2>
        </div>
        <div className={css["loading-state"]}>Loading projects...</div>
      </section>
    );
  }

  return (
    <section className={css.projects} id="projects">
      <div className={css["section-header"]}>
        <div className={css["section-label"]}>Featured Work</div>
        <h2 className={css["section-title"]}>Recent Projects</h2>
      </div>

      <div className={css["projects-grid"]}>
        {displayedProjects.map((project, index) => (
          <div key={project.id || index} className={css["project-card"]}>
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
              alt="photo of website"
              width={350}
              height={250}
            />
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
              <Link
                href={project.link || "#"}
                className={css["project-link"]}
                target="_blank"
              >
                View Project
              </Link>
              <Link
                href={project.live || "#"}
                className={css["live-link"]}
                target="_blank"
              >
                Website
              </Link>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className={css["load-more-container"]}>
          <button onClick={loadMore} className={css["btn-load-more"]}>
            <span>Load More Projects</span>
          </button>
        </div>
      )}
    </section>
  );
}

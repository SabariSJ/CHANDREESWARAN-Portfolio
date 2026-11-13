import React, { useState } from "react";
import {
  FiFolder,
  FiCheck,
  FiX,
  FiInfo,
  FiStar,
  FiChevronRight
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "../styles/Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = portfolioData.projects;

  const categories = ["all", "Performance Marketing", "Content & Video Production", "Academic Research & Data Analytics"];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiFolder />
            <span>Case Studies & Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Campaigns</span>
          </h2>
          <p className="section-subtitle">
            Measurable, high-impact marketing initiatives spanning paid lead generation engines, short-form video content creation, and statistical research on AI in consumer behavior.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className={`glass-panel project-card ${proj.featured ? "featured" : ""}`}
            >
              {/* Card Top Meta */}
              <div className="proj-card-top">
                <div className="proj-category-pill">{proj.category}</div>
                {proj.badge && (
                  <span className="proj-badge-highlight">
                    <FiStar className="badge-star" />
                    {proj.badge}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-subtitle">{proj.subtitle}</p>

              {/* Description */}
              <p className="proj-description">{proj.description}</p>

              {/* Key Metrics Badges */}
              <div className="proj-metrics-row">
                {proj.keyMetrics.map((km, kmIdx) => (
                  <div key={kmIdx} className="metric-chip">
                    <span className="km-val">{km.value}</span>
                    <span className="km-lbl">{km.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="proj-tech-list">
                {proj.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer Action */}
              <div className="proj-card-footer">
                <button
                  type="button"
                  className="btn btn-secondary proj-details-btn"
                  onClick={() => setSelectedProject(proj)}
                >
                  <FiInfo />
                  <span>View Case Details</span>
                  <FiChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Modal"
              >
                <FiX />
              </button>

              <div className="modal-header">
                <span className="proj-category-pill">{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-sub">{selectedProject.subtitle}</p>
              </div>

              <div className="modal-body">
                <div className="modal-metrics-grid">
                  {selectedProject.keyMetrics.map((km, i) => (
                    <div key={i} className="modal-metric-card">
                      <span className="m-val">{km.value}</span>
                      <span className="m-lbl">{km.label}</span>
                    </div>
                  ))}
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-sec-title">Project Overview & Objectives</h4>
                  <p className="modal-text">{selectedProject.description}</p>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-sec-title">Key Execution Deliverables</h4>
                  <ul className="modal-deliverables-list">
                    {selectedProject.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="modal-deliverable-item">
                        <FiCheck className="modal-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section-block">
                  <h4 className="modal-sec-title">Tools & Competencies Applied</h4>
                  <div className="proj-tech-list">
                    {selectedProject.technologies.map((t, idx) => (
                      <span key={idx} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href="#contact"
                  className="btn btn-primary btn-glow"
                  onClick={() => setSelectedProject(null)}
                >
                  Discuss This Project
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

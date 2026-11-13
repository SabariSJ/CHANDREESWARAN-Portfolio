import React from "react";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiTrendingUp,
  FiTag
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiBriefcase />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            11+ months of high-impact execution spanning complete company-wide digital marketing functions, paid Meta acquisition funnels, and viral video creation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {portfolioData.experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              {/* Timeline Marker */}
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-pulse"></div>
              </div>

              {/* Timeline Content Card */}
              <div className="timeline-content glass-panel">
                {/* Header Info */}
                <div className="exp-card-header">
                  <div className="exp-title-block">
                    <span className="exp-type-badge">{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta-block">
                    <span className="exp-duration">
                      <FiCalendar className="meta-icon" /> {exp.duration}
                    </span>
                    <span className="exp-location">
                      <FiMapPin className="meta-icon" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="exp-summary">{exp.summary}</p>

                {/* Key Responsibilities */}
                <div className="exp-details-block">
                  <h5 className="block-title">Key Responsibilities & Deliverables:</h5>
                  <ul className="exp-bullets-list">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="bullet-item">
                        <FiCheckCircle className="bullet-check" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Measurable Achievements */}
                <div className="exp-achievements-box">
                  <div className="ach-badge-label">
                    <FiTrendingUp /> Measurable Impact
                  </div>
                  <div className="ach-pills-list">
                    {exp.achievements.map((ach, aIdx) => (
                      <span key={aIdx} className="ach-pill">
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech & Skills Tags */}
                <div className="exp-tags-row">
                  <span className="tags-label">
                    <FiTag /> Stack:
                  </span>
                  <div className="exp-tags-list">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


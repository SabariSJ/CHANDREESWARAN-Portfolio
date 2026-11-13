import React from "react";
import {
  FiBookOpen,
  FiAward,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiCpu,
  FiBarChart
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "../styles/Education.css";

const Education = () => {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiBookOpen />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Research Work</span>
          </h2>
          <p className="section-subtitle">
            A strategic academic foundation combining postgraduate business management and marketing with an undergraduate degree in computer applications.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {portfolioData.education.map((edu) => (
            <div key={edu.id} className="glass-panel education-card">
              <div className="edu-card-top">
                <div className="edu-icon-badge">
                  <FiBookOpen />
                </div>
                <div className="edu-cgpa-pill">
                  <FiAward className="cgpa-icon" />
                  <span>CGPA: {edu.cgpa}</span>
                </div>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>

              <div className="edu-meta-row">
                <span className="edu-period">
                  <FiCalendar className="meta-icon" /> {edu.period}
                </span>
                <span className="edu-location">
                  <FiMapPin className="meta-icon" /> {edu.location}
                </span>
              </div>

              <p className="edu-description">{edu.description}</p>

              <div className="edu-highlights-list">
                {edu.highlights.map((item, idx) => (
                  <div key={idx} className="edu-highlight-item">
                    <FiCheckCircle className="edu-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Box: MBA Major Thesis Project */}
        <div className="glass-panel mba-project-feature">
          <div className="mba-badge-wrap">
            <span className="project-feature-tag">
              <FiCpu /> Capstone Research Thesis
            </span>
            <span className="project-tool-tag">
              <FiBarChart /> IBM SPSS Statistics
            </span>
          </div>

          <h3 className="mba-project-title">
            Role of AI in Social Media Content Creation and Editing: Impact on User Engagement and Purchase Decisions
          </h3>

          <p className="mba-project-summary">
            Conducted empirical primary research studying how artificial intelligence algorithms and automated video creation tools impact digital consumer behavior, retention rates, and subsequent purchase decisions.
          </p>

          <div className="mba-deliverables-grid">
            <div className="mba-col">
              <span className="col-num">01</span>
              <div>
                <h5>Primary Data Collection</h5>
                <p>Structured quantitative surveys sampling active social media consumers across different demographic clusters.</p>
              </div>
            </div>
            <div className="mba-col">
              <span className="col-num">02</span>
              <div>
                <h5>SPSS Statistical Modeling</h5>
                <p>Ran correlation, regression, and variance tests to measure engagement variance between AI and manual content.</p>
              </div>
            </div>
            <div className="mba-col">
              <span className="col-num">03</span>
              <div>
                <h5>Commercial Recommendations</h5>
                <p>Formulated real-world actionable guidelines for modern brands to maximize ROI by pairing human creativity with AI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;


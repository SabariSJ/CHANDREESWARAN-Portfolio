import React, { useState } from "react";
import {
  FiCode,
  FiShare2,
  FiVideo,
  FiBarChart2,
  FiGlobe,
  FiCheckCircle,
  FiLayers
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "../styles/Skills.css";

const categoryIcons = {
  "digital-marketing": FiShare2,
  "content-creative": FiVideo,
  "business-tools": FiBarChart2,
  "languages": FiGlobe
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = portfolioData.skills.categories;

  const filteredCategories =
    selectedCategory === "all"
      ? categories
      : categories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiLayers />
            <span>Technical Expertise</span>
          </div>
          <h2 className="section-title">
            Core <span className="gradient-text">Skills & Capabilities</span>
          </h2>
          <p className="section-subtitle">
            A specialized blend of performance marketing, dynamic video production, data analytics, and stakeholder management derived directly from real campaign execution.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-nav">
          <button
            type="button"
            className={`skills-tab-btn ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            <span>All Categories</span>
          </button>
          {categories.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || FiCode;
            return (
              <button
                key={cat.id}
                type="button"
                className={`skills-tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <IconComponent className="tab-icon" />
                <span>{cat.name.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Category Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || FiCode;
            return (
              <div key={cat.id} className="glass-panel skill-category-card">
                <div className="category-header">
                  <div className="cat-icon-wrap">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="cat-name">{cat.name}</h3>
                    <p className="cat-desc">{cat.description}</p>
                  </div>
                </div>

                <div className="skills-items-list">
                  {cat.items.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item-row">
                      <div className="skill-info-row">
                        <span className="skill-name-text">
                          <FiCheckCircle className="skill-check-icon" />
                          {skill.name}
                        </span>
                        <span className="skill-badge-level">{skill.level}</span>
                      </div>
                      <div className="skill-progress-track">
                        <div
                          className="skill-progress-bar"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Impact Competency Callout */}
        <div className="skills-summary-footer glass-panel">
          <div className="summary-left">
            <span className="footer-badge">Practical Expertise</span>
            <h4 className="footer-heading">Tools & Platforms Mastered in Real Production</h4>
            <p className="footer-sub">
              Meta Ads Manager • Instagram / LinkedIn Content • Professional Video Cameras • Premiere / CapCut / DaVinci Workflows • Microsoft Power BI • SPSS Statistics • Tally Prime
            </p>
          </div>
          <a href="#contact" className="btn btn-primary btn-glow">
            Inquire About Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;


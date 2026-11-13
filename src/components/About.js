import React from "react";
import {
  FiCheckCircle,
  FiTrendingUp,
  FiVideo,
  FiPieChart,
  FiUsers,
  FiAward,
  FiCompass,
  FiBookOpen
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "../styles/About.css";

const pillarIcons = [FiTrendingUp, FiVideo, FiPieChart, FiUsers];

const About = () => {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiCompass />
            <span>Professional Profile</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Chandreeswaran</span>
          </h2>
          <p className="section-subtitle">
            A high-energy digital marketer bridging the gap between numbers-driven performance ads and captivating visual storytelling.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="about-grid">
          {/* Left Column: Story, Education & Objective */}
          <div className="about-left-col">
            <div className="glass-panel about-story-card">
              <h3 className="card-headline">Background & Strategic Vision</h3>
              <p className="about-body-text">
                {portfolioData.about.overview}
              </p>
              <p className="about-body-text">
                Currently driving end-to-end digital marketing at <strong>Sprout Knowledge Solutions Pvt Ltd</strong>, my focus spans from high-level campaign architecture and budgeting to direct creative execution in the studio with camera handling and post-production editing.
              </p>

              {/* Career Objective Box */}
              <div className="career-objective-box">
                <div className="obj-icon-wrap">
                  <FiAward className="obj-icon" />
                </div>
                <div>
                  <h4 className="obj-title">Career Objective</h4>
                  <p className="obj-desc">{portfolioData.personalInfo.careerObjective}</p>
                </div>
              </div>

              {/* Academic Synergy Box */}
              <div className="academic-synergy-box">
                <div className="synergy-header">
                  <FiBookOpen className="synergy-icon" />
                  <h4>Dual Degree Advantage</h4>
                </div>
                <div className="synergy-items">
                  <div className="synergy-tag">
                    <span className="synergy-bold">MBA (Finance & Marketing)</span>
                    <span className="synergy-inst">Dr. NGP Institute of Technology (CGPA 7.5)</span>
                  </div>
                  <div className="synergy-tag">
                    <span className="synergy-bold">B.Com (Computer Applications)</span>
                    <span className="synergy-inst">Dr. SNS Rajalakshmi College (CGPA 7.0)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Professional Strengths */}
            <div className="glass-panel strengths-card">
              <h4 className="strengths-title">Core Professional Strengths</h4>
              <div className="strengths-grid">
                {portfolioData.about.strengths.map((str, idx) => (
                  <div key={idx} className="strength-item">
                    <FiCheckCircle className="strength-icon" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars of Expertise */}
          <div className="about-right-col">
            <div className="pillars-grid">
              {portfolioData.about.pillars.map((pillar, idx) => {
                const IconComponent = pillarIcons[idx % pillarIcons.length];
                return (
                  <div key={idx} className="glass-panel pillar-card">
                    <div className={`pillar-icon-box p-icon-${idx}`}>
                      <IconComponent />
                    </div>
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <p className="pillar-desc">{pillar.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Fact Callout */}
            <div className="glass-panel highlight-callout">
              <div className="callout-content">
                <span className="callout-accent-label">Proven Track Record</span>
                <h4 className="callout-heading">6,000+ Leads & 7,500+ Community Growth</h4>
                <p className="callout-p">
                  Demonstrated results across multiple organizations through structured Meta Ads management and engaging video formats that retain audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from "react";
import {
  FiAward,
  FiCalendar,
  FiCheckCircle,
  FiGlobe,
  FiTrendingUp,
  FiZap
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "../styles/Certifications.css";

const Certifications = () => {
  return (
    <section id="certifications" className="section-wrapper certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiAward />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Workshops</span>
          </h2>
          <p className="section-subtitle">
            Formal professional certifications in business intelligence, banking & finance, alongside executive management workshops from premier institutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {portfolioData.certifications.map((cert) => (
            <div key={cert.id} className="glass-panel cert-card">
              <div className="cert-card-top">
                <div className="cert-icon-box">
                  <FiAward />
                </div>
                <span className="cert-badge">{cert.badge}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <h4 className="cert-issuer">{cert.issuer}</h4>

              <div className="cert-date-row">
                <FiCalendar className="cert-date-icon" />
                <span>{cert.date}</span>
              </div>

              <p className="cert-desc">{cert.description}</p>

              <div className="cert-footer-meta">
                <span className="cert-verified">
                  <FiCheckCircle /> Verified Credential
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Split: Key Achievements & Multilingual Proficiency */}
        <div className="achievements-languages-split">
          {/* Key Achievements Box */}
          <div className="glass-panel achievements-panel">
            <div className="panel-head">
              <div className="panel-icon-wrap emerald">
                <FiTrendingUp />
              </div>
              <div>
                <h3 className="panel-title">Quantified Career Highlights</h3>
                <p className="panel-sub">Milestones recorded during active agency and corporate tenures</p>
              </div>
            </div>

            <div className="ach-milestones-list">
              <div className="milestone-box">
                <span className="milestone-stat">6,000+</span>
                <div className="milestone-info">
                  <h5>High-Intent Meta Leads</h5>
                  <p>Generated through targeted Meta Ads and lead generation campaigns at MAP Digital.</p>
                </div>
              </div>

              <div className="milestone-box">
                <span className="milestone-stat">6,000</span>
                <div className="milestone-info">
                  <h5>Followers Grown (MAP Digital)</h5>
                  <p>Organic and promotional growth generated within 7 months via viral video strategies.</p>
                </div>
              </div>

              <div className="milestone-box">
                <span className="milestone-stat">1,500</span>
                <div className="milestone-info">
                  <h5>Followers Grown (Sprout Solutions)</h5>
                  <p>Platform management and high-retention video content delivered within 4 months.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Proficiency Panel */}
          <div className="glass-panel languages-panel">
            <div className="panel-head">
              <div className="panel-icon-wrap purple">
                <FiGlobe />
              </div>
              <div>
                <h3 className="panel-title">Language Proficiency</h3>
                <p className="panel-sub">Multilingual capabilities for client and audience outreach</p>
              </div>
            </div>

            <div className="languages-list">
              <div className="lang-row">
                <div className="lang-info">
                  <span className="lang-name">Tamil</span>
                  <span className="lang-badge native">Native / First Language</span>
                </div>
                <div className="lang-track">
                  <div className="lang-fill fill-100"></div>
                </div>
              </div>

              <div className="lang-row">
                <div className="lang-info">
                  <span className="lang-name">English</span>
                  <span className="lang-badge proficient">Proficient (Professional Working)</span>
                </div>
                <div className="lang-track">
                  <div className="lang-fill fill-90"></div>
                </div>
              </div>

              <div className="lang-row">
                <div className="lang-info">
                  <span className="lang-name">Hindi</span>
                  <span className="lang-badge beginner">Beginner (Conversational)</span>
                </div>
                <div className="lang-track">
                  <div className="lang-fill fill-50"></div>
                </div>
              </div>
            </div>

            <div className="lang-note-box">
              <FiZap className="note-icon" />
              <span>
                Able to craft regional vernacular video hooks as well as English corporate campaigns for diverse markets.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

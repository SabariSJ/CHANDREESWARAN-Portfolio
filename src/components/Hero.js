import React, { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiDownload,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiUsers,
  FiVideo,
  FiTarget
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "../styles/Hero.css";

const typingRoles = [
  "Digital Marketing Executive",
  "Meta Ads & Lead Gen Specialist",
  "Videographer & Content Creator",
  "Social Media Growth Strategist",
  "MBA in Marketing & Finance"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentRole = typingRoles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(50);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typingRoles.length);
          setTypingSpeed(120);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Hero Intro */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>{portfolioData.personalInfo.statusBadge}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{portfolioData.personalInfo.name}</span>
          </h1>

          <div className="hero-typing-box">
            <span className="typing-prefix">I specialize in </span>
            <span className="typing-text">{text}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            {portfolioData.personalInfo.summary}
          </p>

          {/* Quick Contact Chips */}
          <div className="hero-meta-chips">
            <span className="meta-chip">
              <FiMapPin className="meta-icon" /> {portfolioData.personalInfo.location}
            </span>
            <a href={`tel:${portfolioData.personalInfo.phone.replace(/\s+/g, '')}`} className="meta-chip linkable">
              <FiPhone className="meta-icon" /> {portfolioData.personalInfo.phone}
            </a>
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="meta-chip linkable">
              <FiMail className="meta-icon" /> {portfolioData.personalInfo.email}
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="btn btn-primary btn-glow"
            >
              <span>View My Work</span>
              <FiArrowRight className="btn-arrow" />
            </a>

            <a
              href="/Chandreeswaran_MS_Resume.pdf"
              download="Chandreeswaran_MS_Resume.pdf"
              className="btn btn-secondary"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="btn btn-secondary btn-outline-contact"
            >
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="social-btn"
              title="Send an Email"
            >
              <FiMail />
            </a>
            <a
              href={`tel:${portfolioData.personalInfo.phone.replace(/\s+/g, '')}`}
              className="social-btn"
              title="Phone Call"
            >
              <FiPhone />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Avatar & Floating Stats */}
        <div className="hero-visual">
          <div className="hero-visual-wrapper">
            {/* Glowing Ring Elements */}
            <div className="glowing-ring ring-outer"></div>
            <div className="glowing-ring ring-inner"></div>

            {/* Avatar Frame */}
            <div className="avatar-frame glass-panel">
              <div className="avatar-inner">
                <div className="avatar-monogram">
                  <span className="monogram-letters">CMS</span>
                  <div className="avatar-role-tag">Digital Marketer</div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="avatar-status-pill">
                <span className="live-status-dot"></span>
                <span>Active @ Sprout Knowledge Solutions</span>
              </div>
            </div>

            {/* Floating Metric 1 */}
            <div className="floating-stat-badge stat-top-left glass-panel">
              <div className="stat-badge-icon cyan">
                <FiTarget />
              </div>
              <div>
                <div className="stat-badge-number">6,000+</div>
                <div className="stat-badge-label">Meta Leads Generated</div>
              </div>
            </div>

            {/* Floating Metric 2 */}
            <div className="floating-stat-badge stat-bottom-right glass-panel">
              <div className="stat-badge-icon purple">
                <FiUsers />
              </div>
              <div>
                <div className="stat-badge-number">7,500+</div>
                <div className="stat-badge-label">Follower Growth Driven</div>
              </div>
            </div>

            {/* Floating Metric 3 */}
            <div className="floating-stat-badge stat-bottom-left glass-panel">
              <div className="stat-badge-icon emerald">
                <FiVideo />
              </div>
              <div>
                <div className="stat-badge-number">Full Cycle</div>
                <div className="stat-badge-label">Video & Content Creation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Ribbon */}
      <div className="hero-metrics-ribbon">
        <div className="container">
          <div className="metrics-grid">
            {portfolioData.personalInfo.highlights.map((item, idx) => (
              <div key={idx} className="metric-item">
                <span className="metric-number gradient-text">{item.number}</span>
                <span className="metric-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

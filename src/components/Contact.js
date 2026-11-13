import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiSend,
  FiDownload,
  FiCheck,
  FiCopy,
  FiClock,
  FiMessageSquare,
  FiArrowUpRight
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "../styles/Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const cleanPhone = portfolioData.contact.phone.replace(/[\s+]/g, "");

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FiMessageSquare />
            <span>Direct Outreach</span>
          </div>
          <h2 className="section-title">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Whether you are looking to scale your lead generation pipelines through Meta Ads, create high-retention video content, or hire an ambitious Digital Marketing Executive, feel free to reach out directly.
          </p>
        </div>

        {/* 4 Direct Communication Channels Grid */}
        <div className="contact-cards-grid">
          {/* Card 1: Email */}
          <div className="glass-panel contact-hub-card highlight-cyan">
            <div className="hub-card-icon-wrap cyan">
              <FiMail />
            </div>
            <div className="hub-card-content">
              <span className="hub-card-label">Email Directly</span>
              <h3 className="hub-card-value">{portfolioData.contact.email}</h3>
              <p className="hub-card-desc">
                Fastest way to get in touch for job opportunities, inquiries, or marketing audits.
              </p>
            </div>
            <div className="hub-card-actions">
              <a
                href={`mailto:${portfolioData.contact.email}?subject=Digital%20Marketing%20Executive%20Opportunity%20-%20Chandreeswaran`}
                className="btn btn-primary btn-glow btn-sm"
              >
                <FiSend />
                <span>Send Email</span>
              </a>
              <button
                type="button"
                className="btn btn-secondary btn-sm copy-btn"
                onClick={copyEmailToClipboard}
                title="Copy email address"
              >
                {copied ? <FiCheck className="copied-icon" /> : <FiCopy />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="glass-panel contact-hub-card highlight-emerald">
            <div className="hub-card-icon-wrap emerald">
              <FiPhone />
            </div>
            <div className="hub-card-content">
              <span className="hub-card-label">Phone & WhatsApp</span>
              <h3 className="hub-card-value">{portfolioData.contact.phone}</h3>
              <p className="hub-card-desc">
                Available for phone discussions, interviews, and instant WhatsApp chat.
              </p>
            </div>
            <div className="hub-card-actions">
              <a
                href={`tel:${portfolioData.contact.phone.replace(/\s+/g, "")}`}
                className="btn btn-primary btn-sm"
              >
                <FiPhone />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${cleanPhone}?text=Hi%20Chandreeswaran,%20I%20saw%20your%20portfolio!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>WhatsApp</span>
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          {/* Card 3: LinkedIn */}
          <div className="glass-panel contact-hub-card highlight-purple">
            <div className="hub-card-icon-wrap purple">
              <FiLinkedin />
            </div>
            <div className="hub-card-content">
              <span className="hub-card-label">Professional Network</span>
              <h3 className="hub-card-value">chandreeswaran-m-s-3196b224</h3>
              <p className="hub-card-desc">
                Connect on LinkedIn for professional endorsements, career history, and updates.
              </p>
            </div>
            <div className="hub-card-actions">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm w-100"
              >
                <FiLinkedin />
                <span>View LinkedIn Profile</span>
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          {/* Card 4: Location */}
          <div className="glass-panel contact-hub-card highlight-amber">
            <div className="hub-card-icon-wrap amber">
              <FiMapPin />
            </div>
            <div className="hub-card-content">
              <span className="hub-card-label">Current Base</span>
              <h3 className="hub-card-value">{portfolioData.contact.location}</h3>
              <p className="hub-card-desc">
                Open to on-site roles in Coimbatore & Tamil Nadu, hybrid, or remote positions.
              </p>
            </div>
            <div className="hub-card-actions">
              <div className="location-status-badge">
                <span className="loc-dot"></span>
                <span>Open for Relocation & Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Availability & Call-to-Action Banner */}
        <div className="glass-panel contact-exec-banner">
          <div className="exec-banner-info">
            <div className="exec-status-pill">
              <FiClock className="clock-icon" />
              <span>{portfolioData.contact.availability}</span>
            </div>
            <h3 className="exec-heading">
              Ready to bring measurable growth and creative excellence to your team.
            </h3>
            <p className="exec-sub">
              Specialized in end-to-end digital marketing execution, video production from camera to edit, and scalable Meta Ads lead generation.
            </p>
            <div className="exec-tags">
              {portfolioData.contact.workPreferences.map((pref, idx) => (
                <span key={idx} className="exec-tag">
                  {pref}
                </span>
              ))}
            </div>
          </div>

          <div className="exec-banner-ctas">
            <a
              href={`mailto:${portfolioData.contact.email}?subject=Discussion%20Regarding%20Digital%20Marketing%20Role`}
              className="btn btn-primary btn-glow"
            >
              <FiSend />
              <span>Initiate Conversation</span>
            </a>
            <a
              href="/Chandreeswaran_MS_Resume.pdf"
              download="Chandreeswaran_MS_Resume.pdf"
              className="btn btn-secondary"
            >
              <FiDownload />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

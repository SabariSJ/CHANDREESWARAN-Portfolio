import React from "react";
import {
  FiLinkedin,
  FiMail,
  FiPhone,
  FiArrowUp,
  FiMapPin,
  FiDownload
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        {/* Footer Top Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="brand-badge">
                <span className="brand-initials">{portfolioData.personalInfo.initials}</span>
              </div>
              <div className="footer-logo-text">
                <span className="f-name">{portfolioData.personalInfo.name}</span>
                <span className="f-title">{portfolioData.personalInfo.title}</span>
              </div>
            </div>

            <p className="footer-bio">
              Results-focused digital marketer with an MBA (Finance & Marketing). 6,000+ leads generated through Meta Ads, 7,500+ follower growth driven, and hands-on camera operation and video editing.
            </p>

            <div className="footer-social-row">
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="f-social-btn"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="f-social-btn"
                title="Email"
              >
                <FiMail />
              </a>
              <a
                href={`tel:${portfolioData.personalInfo.phone.replace(/\s+/g, '')}`}
                className="f-social-btn"
                title="Phone"
              >
                <FiPhone />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Portfolio Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="footer-nav-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct & Resume */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            <div className="footer-contact-details">
              <span className="f-contact-item">
                <FiMapPin className="f-icon" /> {portfolioData.personalInfo.location}
              </span>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="f-contact-item linkable"
              >
                <FiMail className="f-icon" /> {portfolioData.personalInfo.email}
              </a>
              <a
                href={`tel:${portfolioData.personalInfo.phone.replace(/\s+/g, '')}`}
                className="f-contact-item linkable"
              >
                <FiPhone className="f-icon" /> {portfolioData.personalInfo.phone}
              </a>
            </div>

            <div className="f-resume-btn-wrap">
              <a
                href="/Chandreeswaran_MS_Resume.pdf"
                download="Chandreeswaran_MS_Resume.pdf"
                className="btn btn-secondary w-100"
              >
                <FiDownload />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>{portfolioData.personalInfo.name}</strong>. Built with React.js & modern CSS. All rights reserved.
          </p>

          <button
            type="button"
            className="f-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

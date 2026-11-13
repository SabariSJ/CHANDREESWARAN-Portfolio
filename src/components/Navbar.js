import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiDownload,
  FiSend,
  FiUser,
  FiAward,
  FiBriefcase,
  FiCode,
  FiBookOpen,
  FiHome
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import "../styles/Navbar.css";

const navLinks = [
  { name: "Home", href: "#hero", icon: FiHome },
  { name: "About", href: "#about", icon: FiUser },
  { name: "Skills", href: "#skills", icon: FiCode },
  { name: "Experience", href: "#experience", icon: FiBriefcase },
  { name: "Projects", href: "#projects", icon: FiAward },
  { name: "Education", href: "#education", icon: FiBookOpen },
  { name: "Contact", href: "#contact", icon: FiSend }
];

const Navbar = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="navbar-brand"
          onClick={(e) => handleLinkClick(e, "#hero")}
        >
          <div className="brand-badge">
            <span className="brand-initials">{portfolioData.personalInfo.initials}</span>
          </div>
          <div className="brand-text-wrap">
            <span className="brand-name">{portfolioData.personalInfo.name}</span>
            <span className="brand-subtitle">{portfolioData.personalInfo.title}</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    <Icon className="nav-link-icon" />
                    <span>{link.name}</span>
                    {isActive && <span className="nav-indicator-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Resume Action & Mobile Toggle */}
        <div className="navbar-actions">
          <a
            href="/Chandreeswaran_MS_Resume.pdf"
            download="Chandreeswaran_MS_Resume.pdf"
            className="btn btn-secondary resume-nav-btn"
            title="Download PDF Resume"
          >
            <FiDownload className="btn-icon" />
            <span className="btn-text">Resume</span>
          </a>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          <div className="mobile-brand-head">
            <div className="brand-badge small">
              <span>{portfolioData.personalInfo.initials}</span>
            </div>
            <div>
              <p className="mobile-user-name">{portfolioData.personalInfo.name}</p>
              <p className="mobile-user-role">{portfolioData.personalInfo.title}</p>
            </div>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    <Icon className="mobile-link-icon" />
                    <span>{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-footer">
            <a
              href="/Chandreeswaran_MS_Resume.pdf"
              download="Chandreeswaran_MS_Resume.pdf"
              className="btn btn-primary btn-glow w-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiDownload />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


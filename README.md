# Modern Professional Portfolio Website - Chandreeswaran M S

A personal portfolio web application built with **React.js**, **CSS3**, and **Framer Motion**, tailored to showcase the career, campaigns, video production expertise, and academic credentials of **Chandreeswaran M S**, Digital Marketing Executive & Content Creator.

---

## 🌟 Live Features & Sections

- **Sticky Glassmorphic Navbar**: Personal initials logo (`[CMS]`), dynamic active section indicator, smooth anchor scrolling, and instant PDF resume download button.
- **Hero Section**:
  - Bold personal branding and animated typing effect cycling through professional titles.
  - Profile avatar with glowing orbital rings and active employment badge at *Sprout Knowledge Solutions*.
  - Floating metric cards: `6,000+ Meta Leads Generated`, `7,500+ Follower Growth Driven`, and `Full Cycle Video & Content Creation`.
  - Interactive CTAs: "View My Work", "Download Resume", and "Get In Touch".
  - Metrics ribbon highlighting quantified career impact.
- **About Me Section**:
  - Detailed background bridging performance marketing with creative video production.
  - Career objectives, core strengths, and Dual Degree synergy (MBA + B.Com Computer Applications).
  - Four pillars of core expertise.
- **Skills & Technical Expertise**:
  - Organized into 4 categories: *Digital Marketing & Performance*, *Content & Creative Production*, *Business, Analytics & Productivity*, and *Languages & Communication*.
  - Category filter tabs, custom icons, and animated proficiency meters.
- **Professional Work Experience Timeline**:
  - Interactive vertical timeline with pulsing markers.
  - **Sprout Knowledge Solutions Pvt Ltd** (Digital Marketing Executive, 4 Months – Present)
  - **MAP Digital** (Digital Marketing Intern, Nov 2025 – May 2026, 7 Months)
  - Quantified achievements, responsibilities, and stack chips.
- **Featured Projects & Campaigns**:
  - *Scalable Meta Ads Lead Generation Engine* (6,000+ Leads)
  - *Viral Social Media Growth & High-Retention Video Suite* (7,500+ Community Growth)
  - *AI in Social Media Content Creation & Purchase Decisions* (MBA Thesis & SPSS Quantitative Research)
  - *Integrated Brand Identity & Digital Creative Campaigns*
  - Category filters and interactive modal view for deep-dive deliverables.
- **Education & Research**:
  - **MBA (Finance & Marketing)** – Dr. NGP Institute of Technology (CGPA 7.5)
  - **B.Com (Computer Applications)** – Dr. SNS Rajalakshmi College of Arts & Science (CGPA 7.0)
  - Dedicated spotlight on Capstone MBA Research Thesis with SPSS statistical modeling.
- **Certifications, Workshops & Languages**:
  - Bajaj Finserv Certification in Banking, Finance & Insurance (Aug 2025)
  - Microsoft Power BI Certification (Nov 2025)
  - Continuous Management Education Workshop – Jain University, Bengaluru (May 2025)
  - Executive Management Workshop – Amrita School of Business, Kochi (Mar 2025)
  - Interactive language proficiency indicators (Tamil, English, Hindi).
- **Interactive Contact Section**:
  - Direct contact cards (Email, Phone, WhatsApp, Location, LinkedIn).
  - Availability status pill and work preference tags.
  - Contact form with validation and mailto client fallback.
- **Footer**:
  - Quick navigation, copyright info, social links, and smooth back-to-top button.
- **Resume PDF Integration**:
  - Direct download of generated `Chandreeswaran_MS_Resume.pdf` available in the Navbar, Hero, and Contact sections.

---

## 🛠️ Technology Stack

- **Framework**: React.js 18 (Create React App structure)
- **Styling**: Vanilla Modular CSS (separate CSS file per component, dark theme, glassmorphism, responsive media queries, no Tailwind)
- **Icons**: React Icons (`react-icons/fi`)
- **Animations & Effects**: Framer Motion & CSS keyframe animations
- **Document Generation**: jsPDF (for high-fidelity PDF resume generation)
- **Centralized Data**: `src/data/portfolioData.js`

---

## 📁 Project Structure

```
chandruu/
├── public/
│   ├── index.html
│   └── Chandreeswaran_MS_Resume.pdf
├── scripts/
│   └── generatePdf.js
├── src/
│   ├── assets/
│   │   └── resume/
│   │       └── Chandreeswaran_MS_Resume.pdf
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Education.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── data/
│   │   └── portfolioData.js
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Experience.css
│   │   ├── Projects.css
│   │   ├── Education.css
│   │   ├── Certifications.css
│   │   ├── Contact.css
│   │   ├── Footer.css
│   │   ├── App.css
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🚀 Running the Project Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```
The application will launch at `http://localhost:3000`.

### 3. Create Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `build/` directory ready for deployment.


const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

function generateResume() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = 45;

  // Header - Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(30, 58, 138); // Navy blue
  doc.text("CHANDREESWARAN M S", pageWidth / 2, y, { align: "center" });

  y += 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(51, 65, 85);
  doc.text(
    "Digital Marketing Executive | Social Media, Video Editing & Content Creation",
    pageWidth / 2,
    y,
    { align: "center" }
  );

  y += 15;
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(
    "Coimbatore, Tamil Nadu | +91 97904 99888 | chandru9660chandru@gmail.com | linkedin.com/in/chandreeswaran-m-s-3196b224",
    pageWidth / 2,
    y,
    { align: "center" }
  );

  y += 12;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(1);
  doc.line(margin, y, pageWidth - margin, y);
  y += 16;

  // Helper Section Header
  function drawSectionHeader(title) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(30, 58, 138);
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(30, 58, 138);
    doc.setLineWidth(0.8);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;
  }

  // PROFESSIONAL SUMMARY
  drawSectionHeader("Professional Summary");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  const summaryText =
    "Digital Marketing Executive with an MBA (Finance & Marketing), currently handling complete digital marketing at Sprout Knowledge Solutions Pvt Ltd, with 11+ months of hands-on experience in social media marketing, platform management, campaign execution, camera handling, video editing, and content creation. Grew social media following by 6,000 followers at MAP Digital and 1,500 at Sprout Knowledge Solutions, and generated 6,000+ leads through Meta Ads and lead generation campaigns. Seeking a Digital Marketing Executive role to build brand visibility and drive engagement through high-quality video and social content.";
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11 + 6;

  // KEY ACHIEVEMENTS
  drawSectionHeader("Key Achievements");
  const achievements = [
    "• 6,000+ leads generated through Meta Ads and lead generation campaigns.",
    "• 6,000 follower growth in 7 months through social media management and content creation at MAP Digital.",
    "• 1,500 follower growth in 4 months through platform management and video content at Sprout Knowledge Solutions."
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  achievements.forEach((ach) => {
    doc.text(ach, margin, y);
    y += 12;
  });
  y += 6;

  // CORE SKILLS
  drawSectionHeader("Core Skills");
  const skills = [
    {
      category: "Digital Marketing: ",
      text: "Social Media Marketing (SMM) | Platform Management | Campaign Execution | Meta Ads | Lead Generation | Market Research"
    },
    {
      category: "Content & Creative: ",
      text: "Camera Handling | Videography | Video Editing | Content Creation | Promotional Videos & Digital Creatives"
    },
    {
      category: "Business & Tools: ",
      text: "Client Relationship Management | Vendor Coordination | Microsoft Excel, Word, PowerPoint | Power BI (Basic) | SPSS (Basic) | Tally Prime"
    }
  ];
  skills.forEach((s) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(s.category, margin, y);
    const catWidth = doc.getTextWidth(s.category);
    doc.setFont("helvetica", "normal");
    const skillLines = doc.splitTextToSize(s.text, contentWidth - catWidth);
    doc.text(skillLines, margin + catWidth, y);
    y += skillLines.length * 11 + 2;
  });
  y += 6;

  // PROFESSIONAL EXPERIENCE
  drawSectionHeader("Professional Experience");

  // Experience 1
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Digital Marketing Executive", margin, y);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("4 Months – Present", pageWidth - margin, y, { align: "right" });
  y += 11;
  doc.setFont("helvetica", "italic");
  doc.text("Sprout Knowledge Solutions Pvt Ltd", margin, y);
  y += 11;

  const sproutBullets = [
    "• Handle the complete digital marketing function of the company, from strategy and content to campaigns and reporting.",
    "• Manage social media platforms and grew the following by 1,500 followers through consistent content.",
    "• Execute Meta Ads campaigns and lead generation activities to drive enquiries.",
    "• Shoot and edit videos and create digital creatives for social media campaigns."
  ];
  doc.setFont("helvetica", "normal");
  sproutBullets.forEach((b) => {
    const lines = doc.splitTextToSize(b, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 10 + 2;
  });
  y += 6;

  // Experience 2
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Digital Marketing Intern", margin, y);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("Nov 2025 – May 2026", pageWidth - margin, y, { align: "right" });
  y += 11;
  doc.setFont("helvetica", "italic");
  doc.text("MAP Digital", margin, y);
  y += 11;

  const mapBullets = [
    "• Managed social media accounts and grew the following by 6,000 followers in 7 months with engaging promotional content.",
    "• Executed Meta Ads and lead generation campaigns that generated 6,000+ leads.",
    "• Planned and executed marketing campaigns, coordinating with team members and stakeholders.",
    "• Handled camera work, video editing, and creation of promotional videos and digital creatives."
  ];
  doc.setFont("helvetica", "normal");
  mapBullets.forEach((b) => {
    const lines = doc.splitTextToSize(b, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 10 + 2;
  });
  y += 6;

  // EDUCATION
  drawSectionHeader("Education");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text("MBA (Finance & Marketing)", margin, y);
  doc.setFont("helvetica", "normal");
  doc.text(" | Dr. NGP Institute of Technology, Coimbatore | CGPA: 7.5", margin + 130, y);
  doc.setFont("helvetica", "italic");
  doc.text("2024 – 2026", pageWidth - margin, y, { align: "right" });
  y += 12;

  doc.setFont("helvetica", "bold");
  doc.text("B.Com (Computer Applications)", margin, y);
  doc.setFont("helvetica", "normal");
  doc.text(" | Dr. SNS Rajalakshmi College of Arts & Science | CGPA: 7.0", margin + 145, y);
  doc.setFont("helvetica", "italic");
  doc.text("2021 – 2024", pageWidth - margin, y, { align: "right" });
  y += 14;

  // MBA PROJECT
  drawSectionHeader("MBA Project");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text("• Role of AI in Social Media Content Creation and Editing: Impact on User Engagement and Purchase Decisions –", margin, y);
  y += 11;
  doc.setFont("helvetica", "normal");
  doc.text("  collected and analysed primary data using SPSS, evaluated the effectiveness of AI tools in marketing campaigns, and", margin, y);
  y += 10;
  doc.text("  presented actionable recommendations.", margin, y);
  y += 14;

  // CERTIFICATIONS, WORKSHOPS & LANGUAGES
  drawSectionHeader("Certifications, Workshops & Languages");
  const extras = [
    "• Bajaj Finserv Certification in Banking, Finance & Insurance (Aug 2025)",
    "• Microsoft Power BI Certification (Nov 2025)",
    "• Continuous Management Education Workshop – Jain University, Bengaluru (May 2025)",
    "• Workshop – Amrita School of Business, Kochi (Mar 2025)",
    "• Languages: Tamil (Native) | English (Proficient) | Hindi (Beginner)"
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  extras.forEach((ex) => {
    doc.text(ex, margin, y);
    y += 11;
  });

  // Ensure output dirs exist
  const publicDir = path.join(__dirname, "..", "public");
  const assetsDir = path.join(__dirname, "..", "src", "assets", "resume");
  fs.mkdirSync(publicDir, { recursive: true });
  fs.mkdirSync(assetsDir, { recursive: true });

  const buffer = Buffer.from(doc.output("arraybuffer"));
  fs.writeFileSync(path.join(publicDir, "Chandreeswaran_MS_Resume.pdf"), buffer);
  fs.writeFileSync(path.join(assetsDir, "Chandreeswaran_MS_Resume.pdf"), buffer);

  console.log("PDF generated successfully at public and src/assets/resume!");
}

generateResume();


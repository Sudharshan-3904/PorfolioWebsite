import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="section cyber-section">
      <h2 className="section-title">Resume</h2>
      <p>Click below to download my latest resume.</p>
      <a href="/assets/resume.pdf" className="glow-button" download>
        Download Resume
      </a>
    </section>
  );
};

export default Resume;

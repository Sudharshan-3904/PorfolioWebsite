import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="neon-text">Hi, I'm Sudharshan</h1>
        <h2 className="cyber-subtitle">Data Engineer & Data Analyst</h2>
        <p className="tagline">
          Turning data into insight, and insight into impact.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="glow-button">
            View Projects
          </a>
          <a href="#resume" className="glow-button secondary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

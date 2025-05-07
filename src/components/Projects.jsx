import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section cyber-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-card">
        <h3>Real-Time Data Pipeline</h3>
        <p>Built a Kafka + Spark Streaming pipeline for real-time analytics.</p>
        <a
          href="https://github.com/yourusername/project-link"
          className="glow-button"
        >
          GitHub
        </a>
      </div>
      <div className="project-card">
        <h3>BI Dashboard for E-Commerce</h3>
        <p>
          Developed a Tableau dashboard tracking sales and customer behavior.
        </p>
        <a href="https://yourdemo.com" className="glow-button">
          Live Demo
        </a>
      </div>
    </section>
  );
};

export default Projects;

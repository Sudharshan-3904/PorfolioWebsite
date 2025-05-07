import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="section cyber-section">
      <h2 className="section-title">Skills & Tools</h2>
      <div className="skills-grid">
        <div>
          <strong>Languages:</strong> Python, SQL, JavaScript
        </div>
        <div>
          <strong>Tools:</strong> Pandas, NumPy, Power BI, Tableau
        </div>
        <div>
          <strong>Data Engineering:</strong> Apache Airflow, Spark, Kafka,
          BigQuery
        </div>
        <div>
          <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB
        </div>
        <div>
          <strong>Cloud:</strong> GCP, AWS
        </div>
      </div>
    </section>
  );
};

export default Skills;

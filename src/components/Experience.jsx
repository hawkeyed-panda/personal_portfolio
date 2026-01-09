import React from 'react';
import { experience } from '../mock';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Building ML systems in production environments</p>
        
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>
              
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="achievement-item">{achievement}</li>
                ))}
              </ul>
              
              {index < experience.length - 1 && <div className="experience-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

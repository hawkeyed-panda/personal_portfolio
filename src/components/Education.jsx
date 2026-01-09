import React from 'react';
import { education } from '../mock';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic foundation in Computer Science and AI</p>
        
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={edu.id} className="education-card">
              <div className="education-header">
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                </div>
                <span className="education-duration">{edu.duration}</span>
              </div>
              
              <ul className="education-details">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="detail-item">{detail}</li>
                ))}
              </ul>
              
              {index < education.length - 1 && <div className="education-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

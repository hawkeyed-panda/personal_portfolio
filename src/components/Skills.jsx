import React from 'react';
import { skills } from '../mock';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technical capabilities across the ML lifecycle</p>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skill-tags">
                {skillList.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

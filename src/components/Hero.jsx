import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { personalInfo } from '../mock';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-title">{personalInfo.title}</p>
          <p className="hero-bio">{personalInfo.bio}</p>
          
          <div className="hero-actions">
            <button onClick={scrollToProjects} className="btn-primary">
              View Portfolio
              <ArrowDown size={20} />
            </button>
            <button onClick={scrollToContact} className="btn-secondary">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

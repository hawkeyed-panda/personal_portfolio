import React from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { personalInfo } from '../mock';
import '../styles/Contact.css';

const Contact = () => {
  const resumeUrl = "https://customer-assets.emergentagent.com/job_dark-portfolio-67/artifacts/yptuet6o_Pranit%20Manda.pdf";

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Let's build production-grade ML systems together</p>
        
        <div className="contact-content">
          <div className="contact-links-row">
            <a href={`mailto:${personalInfo.email}`} className="contact-link-inline">
              <Mail size={24} />
              <span>Email</span>
            </a>
            
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link-inline">
              <Github size={24} />
              <span>GitHub</span>
            </a>
            
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-inline">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-button"
            data-testid="download-resume-btn"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

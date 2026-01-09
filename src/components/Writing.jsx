import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { writingPosts } from '../mock';
import '../styles/Writing.css';

const Writing = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 340; // card width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="writing" className="section writing-section" data-testid="writing-section">
      <div className="section-container">
        <div className="writing-header">
          <div>
            <h2 className="section-title">Writing</h2>
            <p className="section-subtitle">Technical thoughts and reflections</p>
          </div>
          <div className="carousel-controls">
            <button 
              className="carousel-btn" 
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              data-testid="carousel-scroll-left"
            >
              ←
            </button>
            <button 
              className="carousel-btn" 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              data-testid="carousel-scroll-right"
            >
              →
            </button>
          </div>
        </div>
        
        <div className="carousel-wrapper">
          <div className="writing-carousel" ref={carouselRef} data-testid="writing-carousel">
            {writingPosts.map((post, index) => (
              <Link
                key={index}
                to={`/writing/${post.slug}`}
                className="writing-card"
                data-testid={`writing-card-${index}`}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">Click to read full article</p>
                  <div className="card-footer">
                    <span className="read-more">
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="card-accent"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;

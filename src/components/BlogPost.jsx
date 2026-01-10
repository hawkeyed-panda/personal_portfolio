import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import matter from 'gray-matter';
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook, Link2 } from 'lucide-react';
import { writingPosts, personalInfo } from '../mock';
import '../styles/BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [frontmatter, setFrontmatter] = useState({});
  const [loading, setLoading] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const post = writingPosts.find(p => p.slug === slug);
        if (!post) {
          navigate('/');
          return;
        }

        const response = await fetch(process.env.PUBLIC_URL + post.filePath);
        const text = await response.text();
        const { data, content: markdownContent } = matter(text);
        
        setFrontmatter(data);
        setContent(markdownContent);
        setLoading(false);
      } catch (error) {
        console.error('Error loading post:', error);
        navigate('/');
      }
    };

    loadPost();
  }, [slug, navigate]);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const writingSection = document.getElementById('writing');
      if (writingSection) {
        writingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(frontmatter.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const getRelatedPosts = () => {
    const currentIndex = writingPosts.findIndex(p => p.slug === slug);
    const related = [];
    
    // Get 3 related posts (avoiding current post)
    for (let i = 1; i <= 3; i++) {
      const nextIndex = (currentIndex + i) % writingPosts.length;
      related.push(writingPosts[nextIndex]);
    }
    
    return related;
  };

  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts();

  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <button onClick={handleBack} className="back-button">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      <article className="blog-post">
        <header className="blog-post-meta">
          <h1 className="blog-post-title">{frontmatter.title}</h1>
          
          <div className="blog-author-section">
            <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Pranit Manda" className="author-photo" />
            <div className="author-details">
              <div className="author-name">{personalInfo.name}</div>
              <div className="blog-post-info">
                {frontmatter.date && (
                  <span className="blog-post-date">{frontmatter.date}</span>
                )}
                {frontmatter.readTime && (
                  <span className="blog-post-read-time">{frontmatter.readTime} read</span>
                )}
              </div>
            </div>
          </div>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="blog-post-tags">
              {frontmatter.tags.map((tag, index) => (
                <span key={index} className="blog-tag">{tag}</span>
              ))}
            </div>
          )}
        </header>

        <div className="blog-post-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {content}
          </ReactMarkdown>
        </div>

        {/* Share Section */}
        <div className="blog-share-section">
          <h3 className="share-title">
            <Share2 size={20} />
            Share this post
          </h3>
          <div className="share-buttons">
            <button onClick={shareOnTwitter} className="share-btn twitter-btn">
              <Twitter size={18} />
              <span>Twitter</span>
            </button>
            <button onClick={shareOnLinkedIn} className="share-btn linkedin-btn">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </button>
            <button onClick={shareOnFacebook} className="share-btn facebook-btn">
              <Facebook size={18} />
              <span>Facebook</span>
            </button>
            <button onClick={copyToClipboard} className="share-btn copy-btn">
              <Link2 size={18} />
              <span>{copySuccess ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="related-posts-section">
          <h3 className="related-title">Read More</h3>
          <div className="related-posts-grid">
            {relatedPosts.map((post, index) => (
              <Link
                key={index}
                to={`/writing/${post.slug}`}
                className="related-post-card"
              >
                <span className="related-post-number">{String(index + 1).padStart(2, '0')}</span>
                <h4 className="related-post-title">{post.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

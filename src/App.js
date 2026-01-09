import React from 'react';
import "./App.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Writing />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/writing/:slug" element={<BlogPost />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

// Created by Hrishikesh Kindre for PortfolioAppProject

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  const expertiseItems = [
    {
      title: "Web Design",
      description: "Clean, responsive layouts focused on usability and performance."
    },
    {
      title: "Front-End Development",
      description: "Modern React applications built with scalable architecture."
    },
    {
      title: "Full Stack Solutions", 
      description: "Complete applications with Node.js backends and databases."
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Workspace background" 
          className="hero-image"
          loading="lazy"
        />
        <div className="hero-content">
          <h1>Hi, I'm Hrishikesh</h1>
          <p>I build performant, minimalist web experiences</p>
          <Link to="/projects" className="hero-button">
            View My Work
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-icon">⌄</div>
        <div className="divider-line"></div>
      </div>

      {/* Expertise Section */}
      <section className="expertise-section">
        <h2>My Expertise</h2>
        <div className="expertise-grid">
          {expertiseItems.map((item, index) => (
            <div 
              key={index} 
              className="expertise-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <p>"Simplicity is the ultimate sophistication." — Leonardo da Vinci</p>
      </section>
    </div>
  );
}

export default Home;
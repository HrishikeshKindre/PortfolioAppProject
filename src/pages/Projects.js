// Created by Hrishikesh Kindre for PortfolioAppProject

import React from 'react';
import '../styles/projects.css';

function Projects() {
  const projects = [
    {
      title: "Dashboard Analytics",
      image: "/images/dashboard-analytics.jpg",
      description: "Data dashboards with filters, KPIs, and interactive charts."
    },
    {
      title: "E-commerce Platform",
      image: "/images/e-commerce-platform.jpg",
      description: "Product catalog, cart, Stripe checkout & admin dashboard."
    },
    {
      title: "Portfolio V2",
      image: "/images/portfolio-v2.jpg",
      description: "Gatsby-powered site with SEO optimization and blog integration."
    }
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card-wrapper"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
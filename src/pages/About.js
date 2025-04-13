// Created by Hrishikesh Kindre for PortfolioAppProject

import React from 'react';
import '../styles/about.css';

function About() {
  const skills = ["React", "Node.js", "MongoDB", "JavaScript", "TypeScript", "Express", "Git", "Figma"];
  const timeline = [
    { year: "2018", event: "Started as a front-end hobbyist" },
    { year: "2019", event: "Built first static website with Bootstrap" },
    { year: "2020", event: "Learned React and back-end fundamentals" },
    { year: "2021–Present", event: "Building full-stack web apps with real clients" }
  ];

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <div className="profile-img-container">
            <img
              src="/images/profile.png"
              alt="Hrishikesh"
              className="profile-img"
            />
          </div>
          <div className="about-intro">
            <h2>About Me</h2>
            <p>
              I'm a passionate full-stack developer who blends design thinking with technical expertise.
              With a solid foundation in both front-end and back-end development, I create clean, responsive,
              and accessible web applications that solve real-world problems.
            </p>
          </div>
        </div>

        <div className="timeline-section">
          <h3>Experience Timeline</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="timeline-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="timeline-year">{item.year}</span>
                <p className="timeline-event">{item.event}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3>Skills & Tools</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="skill-badge"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
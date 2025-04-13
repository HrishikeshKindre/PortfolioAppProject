// Created by Hrishikesh Kindre for PortfolioAppProject

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/navbar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="portfolio-navbar">
      <Container fluid className="portfolio-container">
        <Navbar.Brand as={NavLink} to="/" className="portfolio-brand">
          Hrishikesh
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="portfolio-nav-links ms-auto"> {/* ms-auto for right alignment */}
            {['/', '/projects', '/about', '/contact'].map((path, idx) => (
              <Nav.Item key={path} className="portfolio-nav-item">
                <Nav.Link
                  as={NavLink}
                  to={path}
                  end={path === '/'}
                  className="portfolio-nav-link"
                >
                  {['Home', 'Work', 'About', 'Contact'][idx]}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
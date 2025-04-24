import React from 'react';
import './Footer.css';
import logo from '../../assets/Logo.png';

const Footer = () => {
  const technologies = [
    "React JS",
    "Gatsby",
    "Next JS",
    "Node JS"
  ];

  const services = [
    "Social Media Marketing",
    "Web & Mobile App Development",
    "Data & Analytics"
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <p className="footer-description">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h4 className="link-title">Our Technologies</h4>
              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}><a href="#">{tech}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="link-column">
              <h4 className="link-title">Our Services</h4>
              <ul>
                {services.map((service, index) => (
                  <li key={index}><a href="#">{service}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
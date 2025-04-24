import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', to: 'home' },
    { name: 'SERVICES', to: 'services' },
    { name: 'ABOUT US', to: 'about' },
    { name: 'CONTACT US', to: 'contact' },
    { name: 'CAREERS', to: 'careers' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <div className={`logo-container ${isMenuOpen ? 'hidden' : ''}`}>
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
  
        {/* Desktop Navigation - hidden on mobile */}
        <div className={`nav-links ${isMenuOpen ? 'hidden' : ''}`}>
          {navLinks.map((link, index) => (
            <a key={index} href={`#${link.to}`} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>
  
        {/* Mobile Menu Toggle - positioned absolutely on right */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'open black' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
      </div>
  
      {/* Mobile Menu Overlay - links aligned top-left */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={`#${link.to}`} 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
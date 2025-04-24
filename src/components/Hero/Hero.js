import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import heroImage from '../../assets/hero-image.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src={heroImage} alt="Professional workspace background" />
      </div>
      <div className="hero-content-box">
        <h1 className="hero-title">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cta-button"
        >
          GET FREE CONSULTATION
        </Link>
      </div>
    </section>
  );
};

export default Hero;
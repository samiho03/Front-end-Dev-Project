import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Faq from '../components/Faq/Faq';

import Footer from '../components/Footer/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
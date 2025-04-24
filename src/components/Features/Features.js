import React from 'react';
import './Features.css';
import feature1 from '../../assets/image1.png';
import feature2 from '../../assets/image2.png';

const Features = () => {
  const features = [
    {
      title: "Web & Mobile App Development",
      description: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
      image: feature1,
      cta: "LEARN MORE",
      reverse: false
    },
    {
      title: "Digital Strategy Consulting",
      description: "Your digital strategy should complement the overall marketing strategy of the company in online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
      image: feature2,
      cta: "LEARN MORE",
      reverse: true
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`feature-block ${feature.reverse ? 'reverse' : ''}`}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="feature-image">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="img-fluid" 
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-content">
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-description">{feature.description}</p>
                  <button className="feature-button">
                    {feature.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
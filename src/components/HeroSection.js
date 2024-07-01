import React from 'react';
import './style.css';

const HeroSection = () => {
  return (
    <section className="hero_section">
      <div className="section_container">
        <div className="hero_container">
          <div className="text_section">
            <h2>Empower Your Herd</h2>
            <h3>Browse Our Catalog and Connect with Expert AI Services</h3>
            <p>
              Discover trusted insemination providers and access a comprehensive bull catalog to enhance your breeding decisions.
            </p>
            <div className="hero_section_button">
              <button className="button" onClick={() => window.location.href='login.html'}>Get Started</button>
            </div>
          </div>
          <div className="image_section">
            {/* <img src="images/cofffee_image.png" alt="Coffee" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <section className="about_us" id="about">
      <div className="section_container">
        <div className="about_container">
          <div className="text_section">
            <h2 className="section_title">About Us</h2>
            <p>
              Bull Select is dedicated to improving the livestock breeding process for small and large-scale farmers. Our platform provides access to a comprehensive bull catalog and reliable AI service providers, facilitating better breeding decisions.
            </p>
          </div>
          <div className="image_section">
            <img src="./images/about-image.jpg" alt="bull" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from 'react';
import './style.css';

const Services = () => {
  return (
    <section className="services" id="service">
      <h2 className="section_title">Our Services</h2>
      <div className="section_container">
        <div className="service_container">
          <div className="services_items">
            <img src="images/hot_beverages.png" alt="bull-catalog" />
            <div className="services_text">
              <h3>Bull Catalog</h3>
              <p>
                Access a comprehensive bull catalog with filter options for breed and unique traits, plus suggestions for optimal breeding choices.
              </p>
            </div>
          </div>
          <div className="services_items">
            <img src="images/cold_beverages.png" alt="Certified Services" />
            <div className="services_text">
              <h3>Certified Services</h3>
              <p>
                Find detailed profiles of AI service providers including certifications, experience, and location to ensure reliability and accountability.
              </p>
            </div>
          </div>
          <div className="services_items">
            <img src="images/refreshment.png" alt="Rural-Focused" />
            <div className="services_text">
              <h3>Rural-Focused</h3>
              <p>Tailored for Kenya’s agricultural community, our application supports multiple languages and ensures ease of use for local farmers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

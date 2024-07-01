import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className="section_container">
        <div className="footer_section">
          <div className="footer_logo">
            <a href="index.html">
              <img src="./images/Bull select logo.png" alt="Bull Select Logo" />
              <h2>Bull Select</h2>
            </a>
          </div>
          <div className="useful_links">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="contact_us">
            <h3>Contact</h3>
            <ul>
              <li>
                <i className="bx bx-current-location"></i>
                <span>Nairobi, Kenya</span>
              </li>
              <li>
                <i className="bx bxs-phone-call"></i> <span>+254 703 100 798</span>
              </li>
              <li>
                <i className="bx bxs-time-five"></i>
                <span>Mon-Sun : 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
          <div className="follow_us">
            <h3>Follow</h3>
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-whatsapp"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

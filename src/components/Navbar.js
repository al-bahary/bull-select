import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav_logo">
          <a href="Herosection.js">
            <img src="/images/Bull select logo.png" alt="Bull Select" />
            <h2>Bull Select</h2>
          </a>
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click">
          <i className="menu_btn bx bx-menu"></i>
          <i className="close_btn bx bx-x"></i>
        </label>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="bull-catalog.html">Bull Catalog</a></li>
          <li><a href="ai-service-providers.html">AI Service Providers</a></li>
          <li><a href="book.html">Bookings</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

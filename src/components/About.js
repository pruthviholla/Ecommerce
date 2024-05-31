
import React from 'react';


const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to Our E-commerce Site! We are dedicated to providing you with the best
          online shopping experience. Our journey began in [Year] with a simple mission: 
          to make high-quality products accessible to everyone.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <p>
          At Our E-commerce Site, we value quality, affordability, and customer satisfaction.
          We carefully curate our products to ensure they meet our high standards and strive
          to offer them at competitive prices.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <p>
          Our dedicated team works tirelessly to bring you the best products and services.
          We are passionate about what we do and are always here to help you with any questions
          or concerns.
        </p>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>
          Have any questions? Feel free to <a href="/contact">contact us</a>. We are here to
          assist you with anything you need.
        </p>
      </section>
    </div>
  );
};

export default About;
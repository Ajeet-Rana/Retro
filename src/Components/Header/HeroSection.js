import React from "react";
import "./HeroSection.css"; // Custom CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Restaurant</h1>
        <p>
          The people, food, and the prime locations make the perfect place for
          good friends & family to come together and have a great time.
        </p>
        <button className="view-menu-btn">View Menu</button>
      </div>
      <div className="hero-image">
        <img src="Hero.jpg" alt="Restaurant Ambience" />
      </div>
    </section>
  );
};

export default HeroSection;

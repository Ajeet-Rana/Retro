import React from "react";
<<<<<<< HEAD

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center bg-gray-900 text-gray-100 p-8 md:flex-row md:justify-between md:text-left">
      <div className="max-w-lg mb-8 md:mb-0">
        <h1 className="text-3xl font-semibold mb-4 md:text-4xl">
          Welcome to Restaurant
        </h1>
        <p className="text-lg mb-6 leading-relaxed">
          The people, food, and the prime locations make the perfect place for
          good friends & family to come together and have a great time.
        </p>
        <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 py-3 px-6 text-lg font-medium cursor-pointer transition-colors hover:bg-red-700 hover:text-white">
          View Menu
        </button>
      </div>

      <div className="flex justify-center md:flex-1">
        <img
          src="Hero.jpg"
          alt="Restaurant Ambience"
          className="max-w-[40%] rounded-lg shadow-lg"
        />
=======
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
>>>>>>> 9b7bcc2756b10eac69c71f1257136574cd0732af
      </div>
    </section>
  );
};

export default HeroSection;

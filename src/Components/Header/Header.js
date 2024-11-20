import React from "react";
import "./Header.css";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import HeroSection from "./HeroSection";
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="call-button">
          <button>Call - 123 456 789</button>
        </div>
        <div className="logo-img">
          <img src="logo.png" alt="LOGO" />
        </div>
        <div className="reservation-button">
          <button>Reservation</button>
        </div>
      </div>
      <hr className="custom-line" />
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Menu</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
        </div>
      </nav>
      <hr className="custom-line-btm" />
      <HeroSection />
    </header>
  );
}

export default Header;

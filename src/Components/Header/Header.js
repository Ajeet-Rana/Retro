import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import HeroSection from "./HeroSection";

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        <button className="border-2 border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white transition">
          Call - 123 456 789
        </button>

        <div className="flex justify-center">
          <img src="logo.png" alt="LOGO" className="w-32 h-auto" />
        </div>

        <button className="bg-yellow-500 text-gray-900 px-6 py-2 border-2 border-yellow-500 hover:bg-yellow-600 transition">
          Reservation
        </button>
      </div>

      <hr className="border-gray-600 mx-6" />

      <nav className="flex flex-wrap justify-between items-center px-6 py-4">
        <ul className="flex space-x-8 text-lg font-medium">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">About Us</li>
          <li className="hover:text-red-500 cursor-pointer">Our Menu</li>
          <li className="hover:text-red-500 cursor-pointer">Pages</li>
          <li className="hover:text-red-500 cursor-pointer">Blog</li>
          <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
        </ul>

        <div className="flex space-x-4 text-xl">
          <FaInstagram className="hover:text-red-500 cursor-pointer" />
          <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaPinterest className="hover:text-red-500 cursor-pointer" />
        </div>
      </nav>

      <hr className="border-dotted border-t-4 border-gray-500 mx-6" />

      <HeroSection />
    </header>
  );
}

export default Header;

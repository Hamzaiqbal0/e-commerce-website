"use client";

import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* First Row: Contact and Social Media */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-2 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between space-x-4">
          <span className="text-sm">📞 Phone: 03442148252</span>
          <span className="text-sm">✉️ Email: Hamzaiqbal2890@gmail.com</span>
        </div>

        <div className="text-center md:mx-auto mt-2 md:mt-0">
          <p className="text-sm md:text-lg font-semibold">
            🌟 Follow us and get a chance for <span className="text-yellow-400">50% discount!</span>
          </p>
        </div>

        <div className="flex space-x-4 mt-2 md:mt-0 justify-center md:justify-end">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      {/* Second Row: Logo and Navigation */}
      <div className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-600 tracking-wide">
          Bandage
        </h1>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg font-semibold">
            {["Home", "shop", "About Us", "Our Team", "Contact Us", "Pages"].map((item, index) => (
              <li key={index}>
                <a href={`/${item.toLowerCase().replace(/\s/g, "")}`} className="hover:text-blue-500 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <a href="/login" className="hover:text-blue-700 text-blue-500 font-medium">
              Login/Register
            </a>
            <a href="#" aria-label="Search" className="hover:text-black text-blue-600">
              <FaSearch size={20} />
            </a>
            <a href="/cart" aria-label="Cart" className="hover:text-black text-blue-600">
              <FaShoppingCart size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu" className="focus:outline-none">
            <FaBars size={28} className="text-blue-600" />
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-6">
            {["Home", "Shop", "About Us", "Our Team", "Contact Us", "Pages"].map((item, index) => (
              <li key={index}>
                <a href={`/${item.toLowerCase().replace(/\s/g, "")}`} className="block text-lg text-gray-700 hover:text-blue-500 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="/login" className="block text-blue-600 font-medium hover:text-blue-800 transition">
                Login/Register
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

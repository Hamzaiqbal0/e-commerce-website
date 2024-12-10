// src/app/components/Header.tsx
"use client"

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* First Row */}
      <div className="w-full bg-black text-white flex flex-col md:flex-row md:items-center md:justify-between px-8 py-1">
        <div className="flex flex-wrap justify-between md:space-x-6 mb-2 md:mb-0 ">
          <span className="text-sm">Phone: 03442148252</span>
          <span className="text-sm">Email: Hamza@gmail.com</span>
        </div>

        <div className="text-center mb-2 md:mb-0 md:mx-auto">
          <p className="text-sm md:text-lg font-semibold">
            Follow us and get a chance for 50% discount
          </p>
        </div>

        <div className="flex space-x-4 justify-center md:justify-end mt-2 md:mt-0">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      {/* Second Row */}
      <div className="w-full bg-gray-100 text-gray-700 flex items-center justify-between px-8 py-4 shadow-md">
        <h1 className="text-3xl font-bold text-blue-700">Bandage</h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6 text-lg items-center">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">Shop</a></li>
              <li><a href="#" className="hover:text-blue-500">About</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500">Pages</a></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-700 text-blue-500 font-semibold">
              Login/Register
            </a>
            <a href="#" aria-label="Search" className="hover:text-black text-blue-600">
              <FaSearch size={20} />
            </a>
            <a href="#" aria-label="Cart" className="hover:text-black text-blue-600">
              <FaShoppingCart size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="#" className="block hover:text-blue-500">Home</a></li>
            <li><a href="#" className="block hover:text-blue-500">Shop</a></li>
            <li><a href="#" className="block hover:text-blue-500">About</a></li>
            <li><a href="#" className="block hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="block hover:text-blue-500">Contact</a></li>
            <li><a href="#" className="block hover:text-blue-500">Pages</a></li>
            <li><a href="#" className="block hover:text-blue-600 text-blue-300">Login/Register</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

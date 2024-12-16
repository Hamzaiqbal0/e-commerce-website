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
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => {
    setShowAuthModal(false);
    setIsSignUp(false); // Reset to Sign In when modal is closed
  };

  const toggleAuthMode = () => setIsSignUp(!isSignUp);

  return (
    <header className="w-full relative">
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
            {["Home", "Shop", "Products", "Our Team", "About Us", "Contact Us"].map((item, index) => (
              <li key={index}>
                <a href={`/${item.toLowerCase().replace(/\s/g, "")}`} className="hover:text-blue-500 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <button
              onClick={openAuthModal}
              className="hover:text-blue-700 text-blue-500 font-medium"
            >
              Login/Register
            </button>
            <a href="#" aria-label="Search" className="hover:text-black text-blue-600">
              <FaSearch size={20} />
            </a>
            <a href="/products" aria-label="Cart" className="hover:text-black text-blue-600">
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

      {/* Auth Modal Popup */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition duration-300"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>

              <div className="text-center mt-4">
                <button
                  type="button"
                  className="w-full py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition duration-300"
                >
                  {isSignUp ? "Sign Up with Google" : "Sign In with Google"}
                </button>
              </div>
            </form>

            <p className="text-center mt-4">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={toggleAuthMode}
                className="text-blue-500 font-semibold hover:underline"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>

            <button
              onClick={closeAuthModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

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
  FaTimes,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => {
    setShowAuthModal(false);
    setIsSignUp(false); // Reset to Sign In mode
  };

  const toggleAuthMode = () => setIsSignUp(!isSignUp);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white px-6 py-2 flex items-center justify-between">
        <div className="text-md flex space-x-4">
          <span>📞 Phone: 03442148252</span>
          <span>✉️ Email: Hamzaiqbal2890@gmail.com</span>
        </div>
        <div className="text-yellow-400 text-md">
          🌟 Follow us and get a chance for <span className="font-semibold">50% discount!</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500 transition" />
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="px-6 py-4 flex items-center justify-between">
        <h1
          onClick={navigateToHome}
          className="text-3xl font-bold text-blue-600 cursor-pointer"
        >
          Bandage
        </h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "Shop", "Products", "Our Team", "About Us", "Contact Us"].map((item, index) => (
            <a
              key={index}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
              className="text-lg font-medium text-gray-700 hover:text-blue-500 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products"
              className="py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="absolute right-2 top-2 text-blue-500">
              <FaSearch />
            </button>
          </form>
          <a href="/cart" className="text-blue-600 hover:text-black">
            <FaShoppingCart size={24} />
          </a>
          <button
            onClick={openAuthModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Login/Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {["Home", "Shop", "Products", "Our Team", "About Us", "Contact Us"].map((item, index) => (
              <a
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-lg font-medium text-gray-700 hover:text-blue-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="/cart" className="text-blue-600 hover:text-black">
              <FaShoppingCart size={24} />
            </a>
            <button
              onClick={openAuthModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Login/Register
            </button>
          </nav>
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg relative w-96">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none"
                />
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
            <p className="mt-4 text-center">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={toggleAuthMode}
                className="text-blue-500 underline"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
            <button
              onClick={closeAuthModal}
              className="absolute top-2 right-2 text-gray-600 text-2xl"
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

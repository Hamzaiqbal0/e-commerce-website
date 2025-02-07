"use client";

import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUser();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMoreDropdown = () => setIsMoreDropdownOpen(!isMoreDropdownOpen);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  const navigateToHome = () => {
    router.push("/");
  };

  // Cart items count (example)
  const cartItemsCount = 3;

  return (
    <header className={`sticky top-0 z-50 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} shadow-lg transition-colors duration-300`}>
      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={navigateToHome}
          className="text-3xl font-bold cursor-pointer text-blue-600 transition duration-300"
        >
          Bandage
        </h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 items-center text-lg">
          <Link
            href="/"
            className={`text-lg font-semibold hover:text-blue-600 transition duration-300 ${pathname === "/" ? "text-blue-600" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`text-lg font-semibold hover:text-blue-600 transition duration-300 ${pathname.startsWith("/shop") ? "text-blue-600" : ""}`}
          >
            Shop
          </Link>
          <Link
            href="/products"
            className={`text-lg font-semibold hover:text-blue-600 transition duration-300 ${pathname.startsWith("/products") ? "text-blue-600" : ""}`}
          >
            Products
          </Link>
          <Link
              href="/contactus"
              className={`text-lg font-semibold hover:text-blue-600 transition duration-300 ${pathname.startsWith("/contact") ? "text-blue-600" : ""}`}
            >
           Contact Us
            </Link>
          <div className="relative">
            <button
              onClick={toggleMoreDropdown}
              className={`text-lg font-semibold hover:text-blue-600 transition duration-300 ${
                pathname.startsWith("/pricing") || pathname.startsWith("/our-team") || pathname.startsWith("/about")
                  ? "text-blue-600"
                  : ""
              }`}
            >
              More
            </button>
            {isMoreDropdownOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-4 w-48 font-semibold ">
                <Link
                  href="/pricing"
                  className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2 font-semibold"
                >
                  Pricing
                </Link>
                <Link
                  href="/ourteam"
                  className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2 font-semibold"
                >
                  Our Team
                </Link>
                <Link
                  href="/aboutus"
                  className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                >
                  About Us
                </Link>
              </div>
            )}
          </div>
          
        </nav>

        {/* Search Bar and Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products"
              className={`py-2 pl-4 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ${
                isDarkMode ? "bg-gray-800 border-gray-500 text-white placeholder-gray-200" : "bg-white border-gray-300 text-gray-700 placeholder-gray-400"
              }`}
            />
            <button
              type="submit"
              className={`absolute right-2 top-2 transition duration-300 ${
                isDarkMode ? "text-gray-400 hover:text-blue-600" : "text-gray-500 hover:text-blue-600"
              }`}
            >
              <FaSearch />
            </button>
          </form>
          <Link href="/cart" className="relative">
            <FaShoppingCart size={20} className={`hover:text-blue-600 transition duration-300 ${isDarkMode ? "text-white" : "text-gray-700"}`} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartItemsCount}
              </span>
            )}
          </Link>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full hover:bg-gray-200 transition duration-300 ${isDarkMode ? "text-white hover:bg-gray-700" : "text-gray-700"}`}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <SignedIn>
            <div className="flex items-center space-x-4">
              <Link href="/profile">
                {user?.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle size={24} className={`hover:text-blue-600 transition duration-300 ${isDarkMode ? "text-white" : "text-gray-700"}`} />
                )}
              </Link>
              <SignOutButton>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Sign Out
                </button>
              </SignOutButton>
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none transition duration-300 ${isDarkMode ? "text-white" : "text-gray-700"}`}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          <nav className="flex flex-col space-y-4 p-6">
            <Link
              href="/"
              className={`text-base font-medium hover:text-blue-600 transition duration-300 ${pathname === "/" ? "text-blue-600" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`text-base font-medium hover:text-blue-600 transition duration-300 ${pathname.startsWith("/shop") ? "text-blue-600" : ""}`}
            >
              Shop
            </Link>
            <Link
              href="/products"
              className={`text-base font-medium hover:text-blue-600 transition duration-300 ${pathname.startsWith("/products") ? "text-blue-600" : ""}`}
            >
              Products
            </Link>
            <Link
              href="/contactus"
              className={`text-base font-medium hover:text-blue-600 transition duration-300 ${pathname.startsWith("/contact") ? "text-blue-600" : ""}`}
            >
              Contact Us
            </Link>
            <button
              onClick={toggleMoreDropdown}
              className={`text-base font-medium hover:text-blue-600 transition duration-300 ${
                pathname.startsWith("/pricing") || pathname.startsWith("/our-team") || pathname.startsWith("/about")
                  ? "text-blue-600"
                  : ""
              }`}
            >
              More
            </button>
            {isMoreDropdownOpen && (
              <div className="pl-4">
                <Link
                  href="/pricing"
                  className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                >
                  Pricing
                </Link>
                <Link
                  href="/ourteam"
                  className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                >
                  Our Team
                </Link>
                <Link
                  href="/aboutus"
                  className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                >
                  About Us
                </Link>
              </div>
            )}
            
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products"
                className={`w-full py-2 pl-4 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ${
                  isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-gray-700 placeholder-gray-400"
                }`}
              />
              <button
                type="submit"
                className={`absolute right-2 top-2 transition duration-300 ${
                  isDarkMode ? "text-gray-400 hover:text-blue-600" : "text-gray-500 hover:text-blue-600"
                }`}
              >
                <FaSearch />
              </button>
            </form>
            <Link href="/cart" className="relative">
              <FaShoppingCart size={20} className={`hover:text-blue-600 transition duration-300 ${isDarkMode ? "text-white" : "text-gray-700"}`} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full hover:bg-gray-200 transition duration-300 ${isDarkMode ? "text-white hover:bg-gray-700" : "text-gray-700"}`}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <SignedIn>
              <div className="flex items-center space-x-4">
                <Link href="/profile">
                  {user?.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle size={24} className={`hover:text-blue-600 transition duration-300 ${isDarkMode ? "text-white" : "text-gray-700"}`} />
                  )}
                </Link>
                <SignOutButton>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
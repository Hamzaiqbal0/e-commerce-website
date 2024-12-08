// src/app/components/Footer.tsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1440px] mx-auto bg-gray-200 py-8 px-8">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-gray-300 pb-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Bandage</h2>

        <div className="flex space-x-6">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Section 2: Links */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-4">Company Info</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-600">About Us</a></li>
            <li><a href="#" className="hover:text-gray-600">Careers</a></li>
            <li><a href="#" className="hover:text-gray-600">We are Hiring</a></li>
            <li><a href="#" className="hover:text-gray-600">Blog</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-600">About Us</a></li>
            <li><a href="#" className="hover:text-gray-600">Careers</a></li>
            <li><a href="#" className="hover:text-gray-600">We are Hiring</a></li>
            <li><a href="#" className="hover:text-gray-600">Blog</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-600">Business Marketing</a></li>
            <li><a href="#" className="hover:text-gray-600">User Analytics</a></li>
            <li><a href="#" className="hover:text-gray-600">Live Chat</a></li>
            <li><a href="#" className="hover:text-gray-600">Unlimited Support</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-600">iOS & Android</a></li>
            <li><a href="#" className="hover:text-gray-600">Watch a Demo</a></li>
            <li><a href="#" className="hover:text-gray-600">Customers</a></li>
            <li><a href="#" className="hover:text-gray-600">API</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-semibold mb-4">Get in Touch</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-400 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-600">
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

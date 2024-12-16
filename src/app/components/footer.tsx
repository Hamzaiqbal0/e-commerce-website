import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1440px] mx-auto bg-gradient-to-br from-gray-300 to-gray-500 text-white py-12 px-8">
      {/* Section 1: Logo and Social Media */}
      <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-gray-700 pb-6 mb-10">
        <h2 className="text-3xl font-extrabold mb-6 md:mb-0 tracking-wide">
          Bandage
        </h2>

        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaTwitter size={28} />
          </a>
        </div>
      </div>

      {/* Section 2: Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-10">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-800">Company Info</h3>
          <ul className="space-y-2">
            {["About Us", "Careers", "We are Hiring", "Blog"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-800">Legal</h3>
          <ul className="space-y-2">
            {["Privacy Policy", "Terms of Service", "Return Policy", "Cookies Policy"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-800">Features</h3>
          <ul className="space-y-2">
            {["Business Marketing", "User Analytics", "Live Chat", "Unlimited Support"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-800">Resources</h3>
          <ul className="space-y-2">
            {["iOS & Android", "Watch a Demo", "Customers", "API"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-800">Get in Touch</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-600 rounded-l-md focus:outline-none bg-gray-700 placeholder-gray-400 text-white"
            />
            <button className="bg-blue-600 text-white px-5 rounded-r-md hover:bg-blue-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-800 text-sm space-y-2">
        <p>All Rights Reserved</p>
        <p>
          Made with 💻 by <span className="text-gray-800 font-semibold">Muhammad Hamza Iqbal</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

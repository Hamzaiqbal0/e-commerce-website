"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Footer from "../components/footer";
import SignInSignUp from "../sign/page"; // Importing the SignInSignUp popup

export default function ContactUs() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const images = [
    { src: "/p1.png", alt: "Office 1" },
    { src: "/p2.png", alt: "Office 2" },
    { src: "/p3.png", alt: "Office 3" },
  ];

  // Function to toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <nav className="w-full max-w-[1340px] mx-auto flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-b-lg">
        <h1 className="text-4xl font-bold text-blue-600">Bandage</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-500 font-semibold transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-blue-500 font-semibold transition duration-300">
              Product
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-blue-500 font-semibold transition duration-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="hover:text-blue-500 font-semibold transition duration-300">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4 items-center">
          <button onClick={togglePopup} className="hover:text-blue-500 transition duration-300">
            Login
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
            Become a Member →
          </button>
        </div>
      </nav>

      {/* Contact Us Section */}
      <section className="flex flex-wrap items-center justify-between mb-12 ml-8">
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <p className="text-lg text-gray-600 mb-2">CONTACT US</p>
          <h1 className="text-4xl font-bold mb-4">Get in touch today!</h1>
          <p className="text-gray-600 mb-4">
            We are here to answer your questions and help you get started. Reach out to us through the contact details below!
          </p>

          <div className="flex flex-col space-y-2 mb-6">
            <Link href="tel:+923442148252" className="text-blue-500 hover:underline">
              Phone: +92 344 2148252
            </Link>
            <Link href="mailto:Hamzaiqbal2890@gmail.com" className="text-blue-500 hover:underline">
              E-mail: Hamzaiqbal2890@gmail.com
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              <FaTwitter size={24} />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              <FaFacebookF size={24} />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-pink-500">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-700">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/z2.png"
            alt="Contact Us Image"
            width={500}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <Footer />

      {/* Sign In / Sign Up Popup */}
      {showPopup && <SignInSignUp onClose={togglePopup} />}
    </div>
  );
}

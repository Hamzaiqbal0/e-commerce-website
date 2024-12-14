"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/footer';

export default function ContactUs() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const images = [
    { src: '/p1.png', alt: 'Office 1' },
    { src: '/p2.png', alt: 'Office 2' },
    { src: '/p3.png', alt: 'Office 3' },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 p-8">
        <nav className="w-[1322px] h-[91px] flex justify-between items-center mx-auto mt-4 px-4">
          <h1 className="text-3xl font-bold">Bandage</h1>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-500 font-semibold">Home</a></li>
            <li><a href="/productspecs" className="hover:text-gray-500 font-semibold">Product</a></li>
            <li><a href="/pricing" className="hover:text-gray-500 font-semibold">Pricing</a></li>
            <li><a href="/contactus" className="hover:text-gray-500 font-semibold">Contact</a></li>
          </ul>
          <div className="flex space-x-4 items-center">
            <a href="/login" className="hover:text-gray-500">Login</a>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Become a Member →
            </button>
          </div>
        </nav>
      {/* Contact Us Section */}
      <section className="flex flex-wrap items-center justify-between mb-12">
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <p className="text-lg text-gray-600 mb-2">CONTACT US</p>
          <h1 className="text-4xl font-bold mb-4">Get in touch today!</h1>
          <p className="text-gray-600 mb-4">
            We are here to answer your questions and help you get started. Reach out to us through the contact details below!
          </p>
          
          <div className="flex flex-col space-y-2 mb-6">
            <Link href="tel:+1234567890" className="text-blue-500 hover:underline">
              Phone: +1 234 567 890
            </Link>
            <Link href="fax:+1234567890" className="text-blue-500 hover:underline">
              Fax: +1 234 567 890
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

      {/* Visit Our Office Section */}
      <section className="text-center">
        <p className="text-lg text-gray-600 mb-2">VISIT OUR OFFICE</p>
        <h2 className="text-3xl font-bold mb-4">We help small businesses with big ideas</h2>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="w-[300px] h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-xl font-semibold mb-4">We can't wait to meet you</p>
        <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 shadow-lg mb-10">
          Try it for Free
        </button>
      </section>
      <Footer />

      {/* Image Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl w-full p-4">
            <Image src={selectedImage} alt="Selected" width={800} height={600} className="w-full h-auto rounded-lg shadow-lg" />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
          
        </div>
        
      )}
    </div>
  );
}

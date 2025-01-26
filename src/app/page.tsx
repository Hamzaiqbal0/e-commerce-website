// src/app/page.tsx
"use client"

import Link from "next/link";
import Header from "./components/Navbar";
import Footer from "./components/footer";
import React from "react";
import Cloths from "./components/Cloths";

export default function Home() {

  return (
    <div className="font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        
        <section className="relative w-full h-[660px] overflow-hidden">
          <img
            src="pic2.jpg"
            alt="Summer Collection"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
              Discover the <span className="text-yellow-400">New Collection</span>
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-md animate-fadeInDelay">
              Embrace the elegance of summer fashion with our exclusive range.
            </p>
            <Link href="/shop">
              <button className="bg-yellow-500 hover:bg-yellow-600 transition-transform transform hover:scale-105 px-6 py-3 rounded-md font-semibold animate-bounce">
                Shop Now
              </button>
            </Link>
          </div>
        </section>

        {/* Editor's Pick Section */}
        <section className="bg-gray-100 py-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Editors Pick</h2>
            <p className="text-gray-600">Handpicked items for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
            {["EP1.png", "EP2.png", "EP3.png"].map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-md">
                <img
                  src={`/${img}`}
                  alt={`Pick ${index + 1}`}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">Explore</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Cloths /> 
        
        <section className="max-w-[1440px] h-[600px] bg-gradient-to-br from-green-500 to-green-700 flex flex-col lg:flex-row items-center justify-between mx-auto py-16 px-8 relative overflow-hidden">
  {/* Left Sub-section */}
  <div className="w-full lg:w-[500px] h-[400px] bg-white bg-opacity-25 backdrop-blur-lg p-10 rounded-lg text-center lg:text-left shadow-lg mb-8 lg:mb-0">
    <p className="text-white text-lg uppercase tracking-widest mb-3">Summer 2020</p>
    <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
      Vita Classic Product
    </h2>
    <p className="text-white text-sm sm:text-base mb-6">
    Experience fashion with a modern edge — our clothing brand blends style and quality, now available at your fingertips through our store.
    </p>
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <p className="text-white text-3xl font-bold">$16.48</p>
      <Link href="/products">
        <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-md hover:bg-green-100 transition duration-300 shadow-lg">
          Add to Cart
        </button>
      </Link>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="w-[600px] lg:w-1/2 h-[600px]">
    <img
      src="/pic1.png"
      alt="Vita Classic Product"
      className="w-[600px] h-[600px] object-cover rounded-lg"
    />
  </div>
</section>

<section className="max-w-[1440px] bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col-reverse lg:flex-row items-center justify-between mx-auto py-16 px-8 relative">
  {/* Left Side Image */}
  <div className="w-full lg:w-1/2 relative overflow-hidden rounded-lg">
    <img
      src="/NN1.png"
      alt="Neural Universe"
      className="w-full h-[300px] md:h-[400px] lg:h-[682px] object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  {/* Right Sub-section */}
  <div className="w-full lg:w-1/2 p-8 md:p-12 text-center lg:text-left">
    <p className="text-gray-700 text-lg uppercase tracking-wide mb-4">Summer 2020</p>
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-snug">
      Part of the Neural Universe
    </h2>
    <p className="text-gray-600 text-base mb-8">
    Experience fashion with a modern edge — our clothing brand blends style and quality, now available at your fingertips through our store.
    </p>
    <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
      <Link href="/products">
        <button className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition duration-300 shadow-md">
          Buy Now
        </button>
      </Link>
      <button className="bg-gray-300 text-gray-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-400 transition duration-300 shadow-md">
        Read More
      </button>
    </div>
  </div>
</section>

<section className="max-w-[1440px] bg-gradient-to-b from-gray-200 to-white py-16 px-6 md:px-12 mx-auto">
  {/* Heading Sub-section */}
  <div className="max-w-[700px] mb-12 mx-auto text-center">
    <p className="text-xl font-semibold text-blue-600 uppercase tracking-widest mb-3">Practice Advice</p>
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">Featured Post</h2>
    <p className="text-gray-600 text-lg leading-relaxed">
    Elevate your wardrobe with our exclusive designs, where comfort meets creativity, seamlessly delivered through our online shopping platform
    </p>
  </div>

  {/* News Grid Sub-section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* News Item 1 */}
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src="/F1.png"
        alt="Google News"
        className="w-full h-[400px] object-cover rounded-md mb-6"
      />
      <a href="#" className="text-lg font-bold text-blue-500 hover:underline">
        Google News
      </a>
    </div>

    {/* News Item 2 */}
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src="/F2.png"
        alt="Trending News"
        className="w-full h-[400px] object-cover rounded-md mb-6"
      />
      <a href="#" className="text-lg font-bold text-blue-500 hover:underline">
        Trending News
      </a>
    </div>

    {/* News Item 3 */}
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src="/F3.png"
        alt="New Releases"
        className="w-full h-[400px] object-cover rounded-md mb-6"
      />
      <a href="#" className="text-lg font-bold text-blue-500 hover:underline">
        New Releases
      </a>
    </div>
  </div>

  {/* Learn More Link */}
  <div className="mt-12 text-center">
    <a href="ourteam" className="text-blue-600 font-semibold text-lg hover:underline">
      Learn More →
    </a>
  </div>
</section>

      </main>
      
      <Footer />
    </div>
  );
}

// src/app/page.tsx
"use client"

import Link from "next/link";
import Header from "./components/Navbar";
import Footer from "./components/footer";
import React from "react";
import Cloths from "./components/Cloths";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/pic2.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
              <span className="bg-yellow-400 rounded-xl text-blue-500 px-3 py-1">Discover</span> the{" "}
              <span className="text-yellow-400">New Collection</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl mb-6 max-w-md animate-fadeInDelay">
              Embrace the elegance of summer fashion with our exclusive range.
            </p>

            {/* Button */}
            <Link href="/shop">
              <button className="bg-yellow-500 hover:bg-yellow-600 transition-transform transform hover:scale-105 px-6 py-3 rounded-md font-semibold shadow-lg animate-bounce">
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
                <Image
                  src={`/${img}`}
                  alt={`Pick ${index + 1}`}
                  width={400}
                  height={400}
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

        {/* Vita Classic Product Section */}
<section className="max-w-[1440px] min-h-[600px] bg-gradient-to-br from-green-500 to-green-700 flex flex-col lg:flex-row items-center justify-between mx-auto py-8 lg:py-16 px-4 lg:px-8 relative overflow-hidden">
  {/* Left Sub-section */}
  <div className="w-full lg:w-[500px] h-auto lg:h-[400px] bg-white bg-opacity-25 backdrop-blur-lg p-6 lg:p-10 rounded-lg text-center lg:text-left shadow-lg mb-8 lg:mb-0">
    <p className="text-white text-sm lg:text-lg uppercase tracking-widest mb-3">Summer 2020</p>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 lg:mb-6 leading-tight">
      Vita Classic Product
    </h2>
    <p className="text-white text-sm lg:text-base mb-4 lg:mb-6">
      Experience fashion with a modern edge — our clothing brand blends style and quality, now available at your fingertips through our store.
    </p>
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <p className="text-white text-2xl lg:text-3xl font-bold">$16.48</p>
      <Link href="/products">
        <button className="bg-white text-green-700 font-semibold px-6 py-2 lg:px-8 lg:py-3 rounded-md hover:bg-green-100 transition duration-300 shadow-lg">
          Add to Cart
        </button>
      </Link>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="w-full lg:w-1/2 h-[300px] lg:h-[600px] mt-8 lg:mt-0">
    <Image
      src="/pic1.png"
      alt="Vita Classic Product"
      width={600}
      height={600}
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</section>

{/* Neural Universe Section */}
<section className="max-w-[1440px] bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col-reverse lg:flex-row items-center justify-between mx-auto py-8 lg:py-16 px-4 lg:px-8 relative">
  {/* Left Side Image */}
  <div className="w-full lg:w-1/2 h-[300px] lg:h-[682px] relative overflow-hidden rounded-lg mt-8 lg:mt-0">
    <Image
      src="/NN1.png"
      alt="Neural Universe"
      width={600}
      height={682}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  {/* Right Sub-section */}
  <div className="w-full lg:w-1/2 p-6 lg:p-12 text-center lg:text-left">
    <p className="text-gray-700 text-sm lg:text-lg uppercase tracking-wide mb-4">Summer 2020</p>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 lg:mb-6 leading-snug">
      Part of the Neural Universe
    </h2>
    <p className="text-gray-600 text-sm lg:text-base mb-6 lg:mb-8">
      Experience fashion with a modern edge — our clothing brand blends style and quality, now available at your fingertips through our store.
    </p>
    <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
      <Link href="/products">
        <button className="bg-green-600 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-md font-semibold hover:bg-green-700 transition duration-300 shadow-md">
          Buy Now
        </button>
      </Link>
      <button className="bg-gray-300 text-gray-700 px-6 py-2 lg:px-8 lg:py-3 rounded-md font-semibold hover:bg-gray-400 transition duration-300 shadow-md">
        Read More
      </button>
    </div>
  </div>
</section>

{/* Featured Post Section */}
<section className="max-w-[1440px] bg-gradient-to-b from-gray-200 to-white py-8 lg:py-16 px-4 lg:px-12 mx-auto">
  {/* Heading Sub-section */}
  <div className="max-w-[700px] mb-8 lg:mb-12 mx-auto text-center">
    <p className="text-lg lg:text-xl font-semibold text-blue-600 uppercase tracking-widest mb-3">Practice Advice</p>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 lg:mb-6">Featured Post</h2>
    <p className="text-gray-600 text-sm lg:text-lg leading-relaxed">
      Elevate your wardrobe with our exclusive designs, where comfort meets creativity, seamlessly delivered through our online shopping platform
    </p>
  </div>

  {/* News Grid Sub-section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* News Item 1 */}
    <div className="flex flex-col items-center text-center bg-white p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src="/F1.png"
        alt="Google News"
        width={400}
        height={400}
        className="w-full h-[200px] lg:h-[300px] object-cover rounded-md mb-4 lg:mb-6"
      />
      <a href="#" className="text-base lg:text-lg font-bold text-blue-500 hover:underline">
        Google News
      </a>
    </div>

    {/* News Item 2 */}
    <div className="flex flex-col items-center text-center bg-white p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src="/F2.png"
        alt="Trending News"
        width={400}
        height={400}
        className="w-full h-[200px] lg:h-[300px] object-cover rounded-md mb-4 lg:mb-6"
      />
      <a href="#" className="text-base lg:text-lg font-bold text-blue-500 hover:underline">
        Trending News
      </a>
    </div>

    {/* News Item 3 */}
    <div className="flex flex-col items-center text-center bg-white p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src="/F3.png"
        alt="New Releases"
        width={400}
        height={400}
        className="w-full h-[200px] lg:h-[300px] object-cover rounded-md mb-4 lg:mb-6"
      />
      <a href="#" className="text-base lg:text-lg font-bold text-blue-500 hover:underline">
        New Releases
      </a>
    </div>
  </div>

  {/* Learn More Link */}
  <div className="mt-8 lg:mt-12 text-center">
    <a href="ourteam" className="text-blue-600 font-semibold text-base lg:text-lg hover:underline">
      Learn More →
    </a>
  </div>
</section>
      </main>
      <Footer />
    </div>
  );
}
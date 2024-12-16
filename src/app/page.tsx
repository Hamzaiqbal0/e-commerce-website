// src/app/page.tsx
import Link from "next/link";
import Header from "./components/Navbar";
import Footer from "./components/footer";
import React from "react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Classic Shirt",
      department: "English Department",
      price: "$45.00",
      image: "/BS1.png",
      colors: ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"],
    },
    {
      id: 2,
      name: "Denim Jacket",
      department: "English Department",
      price: "$40.00",
      image: "/BS2.png",
      colors: ["bg-gray-700", "bg-blue-600", "bg-red-400", "bg-purple-500"],
    },
    {
      id: 3,
      name: "Sports Shoes",
      department: "English Department",
      price: "$60.00",
      image: "/BS3.png",
      colors: ["bg-black", "bg-white", "bg-blue-400", "bg-orange-400"],
    },
    {
      id: 4,
      name: "Casual Trousers",
      department: "English Department",
      price: "$35.00",
      image: "/BS4.png",
      colors: ["bg-brown-500", "bg-gray-400", "bg-green-700", "bg-yellow-300"],
    },
    {
      id: 5,
      name: "Summer Dress",
      department: "English Department",
      price: "$50.00",
      image: "/BS5.png",
      colors: ["bg-pink-400", "bg-red-500", "bg-blue-300", "bg-white"],
    },
    {
      id: 6,
      name: "Leather Wallet",
      department: "English Department",
      price: "$20.00",
      image: "/BS6.png",
      colors: ["bg-brown-700", "bg-black", "bg-tan-500", "bg-gray-600"],
    },
    {
      id: 7,
      name: "Wool Scarf",
      department: "English Department",
      price: "$15.00",
      image: "/BS7.png",
      colors: ["bg-gray-300", "bg-red-600", "bg-purple-700", "bg-green-500"],
    },
    {
      id: 8,
      name: "Running Shorts",
      department: "English Department",
      price: "$30.00",
      image: "/BS8.png",
      colors: ["bg-blue-500", "bg-black", "bg-gray-800", "bg-yellow-400"],
    },
  ];

  return (
    <div className="font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[600px] overflow-hidden">
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
            <h2 className="text-4xl font-bold mb-2">Editor's Pick</h2>
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

        {/* Featured Products Section */}
        <section className="py-16 px-4 md:px-20 bg-white">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3">Bestseller Products</h2>
            <p className="text-gray-500">Our most popular items this season</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 shadow-md rounded-lg overflow-hidden transform hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-500 mb-2">{product.department}</p>
                  <p className="text-lg font-bold text-green-500 mb-3">{product.price}</p>
                  <div className="flex space-x-2">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className={`w-6 h-6 rounded-full ${color} border border-gray-300`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-[1440px] h-auto bg-gradient-to-br from-green-500 to-green-700 flex flex-col lg:flex-row items-center justify-between mx-auto py-16 px-8 relative overflow-hidden">
  {/* Left Sub-section */}
  <div className="w-full lg:w-[500px] bg-white bg-opacity-25 backdrop-blur-lg p-10 rounded-lg text-center lg:text-left shadow-lg mb-8 lg:mb-0">
    <p className="text-white text-lg uppercase tracking-widest mb-3">Summer 2020</p>
    <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
      Vita Classic Product
    </h2>
    <p className="text-white text-sm sm:text-base mb-6">
      We know how larger objects will act. We know how our objects will act. We know.
    </p>
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <p className="text-white text-3xl font-bold">$16.48</p>
      <Link href="/pricing">
        <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-md hover:bg-green-100 transition duration-300 shadow-lg">
          Add to Cart
        </button>
      </Link>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="w-full lg:w-1/2 h-auto">
    <img
      src="/pic1.png"
      alt="Vita Classic Product"
      className="w-full h-full object-cover rounded-lg shadow-2xl"
    />
  </div>
</section>

<section className="max-w-[1440px] bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col-reverse lg:flex-row items-center justify-between mx-auto py-16 px-8 relative">
  {/* Left Side Image */}
  <div className="w-full lg:w-1/2 relative overflow-hidden rounded-lg shadow-lg">
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
      We know how larger objects will act. But things on a small scale are different.
    </p>
    <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
      <Link href="/productspecs">
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
      Problems trying to resolve the conflict between the two major realms of classical physics, Newtonian mechanics.
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
    <a href="#" className="text-blue-600 font-semibold text-lg hover:underline">
      Learn More →
    </a>
  </div>
</section>

      </main>
      <Footer />
    </div>
  );
}

// src/app/page.tsx
import Header from "./components/Navbar";
import Footer from "./components/footer";
import React from "react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Classic Shirt",
      department: "English Department",
      price: "/$45.00",
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
    <div>
      <Header />
      <main>
        {/* Section 1: New Collection */}
        <section className="w-full max-w-[1440px] mx-auto h-[600px] bg-blue-100 flex flex-col md:flex-row items-center justify-between relative overflow-hidden bg-transparent">
          {/* Left Transparent Sub-section */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center px-8">
            <div className="bg-white bg-opacity-20 p-8 rounded-md max-w-md">
              <p className="text-gray-700 text-lg mb-4">SUMMER 2020</p>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">NEW COLLECTION</h2>
              <p className="text-gray-600 mb-6">
                We know how large objects will act, but things on a small scale.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-full h-full">
            <img
              src="pic2.jpg"
              alt="Summer Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Section 2: Editor's Pick */}
        <section className="w-full max-w-[1440px] mx-auto h-[770px] bg-gray-100 py-12 px-8">
          {/* Section Heading and Content */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Editor's Pick</h2>
            <p className="text-gray-600">Problem trying to resolve the conflict between</p>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 ml-48">
            {/* Men Column */}
            <div className="flex flex-col items-center">
              <div className="w-[510px] h-[500px] overflow-hidden">
                <img
                  src="/EP1.png"
                  alt="Men Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Men</h3>
            </div>

            {/* Women Column */}
            <div className="flex flex-col items-center">
              <div className="w-[240px] h-[500px] overflow-hidden ml-36">
                <img
                  src="/EP2.png"
                  alt="Women Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Women</h3>
            </div>

            {/* Kids Column */}
            <div className="flex flex-col items-center">
              <div className="w-[240px] h-[242px] mb-4 overflow-hidden mr-10">
                <img
                  src="/EP3.png"
                  alt="Kids Collection 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[240px] h-[242px] overflow-hidden mr-10">
                <img
                  src="/EP4.png"
                  alt="Kids Collection 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Kids</h3>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Products */}
        <section className="w-[1124px] mx-auto my-0 px-8 py-[80px]">
          {/* Featured Products Heading Section */}
          <div className="w-[692px] h-[102px] mb-[80px]">
            <p className="text-lg text-gray-600 mb-2">Featured products</p>
            <h2 className="text-4xl font-bold mb-2">BESTSELLER PRODUCTS</h2>
            <p className="text-gray-600">Problem trying to resolve the conflict between</p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[80px]">
            {products.map((product) => (
              <div key={product.id} className="w-[238px] h-[615px] flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover mb-2 rounded-md"
                />
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-500 mb-2">{product.department}</p>
                <p className="text-xl font-bold mb-3">{product.price}</p>
                {/* Color Variations */}
                <div className="flex space-x-2">
                  {product.colors.map((color, index) => (
                    <span key={index} className={`w-6 h-6 rounded-full ${color}`}></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
         {/* New Section 1 */}
         <section className="w-[1440px] h-[711px] bg-green-500 flex items-center justify-between relative">
          {/* Left Sub-section */}
          <div className="w-[509px] h-[432px] bg-white bg-opacity-20 p-8 rounded-md ml-16">
            <p className="text-white text-lg mb-4">SUMMER 2020</p>
            <h2 className="text-4xl font-bold text-white mb-4">Vita Classic Product</h2>
            <p className="text-white mb-6">
              We know how larger objects will act. We know how are objects will act. We know.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-white text-2xl font-bold">$16.48</p>
              <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-1/2 h-auto">
            <img
              src="/pic1.png" // Replace with your image path
              alt="Vita Classic Product"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

          {/* New Section 2 */}
          <section className="w-[1440px] h-[682px] bg-gray-100 flex items-center justify-between relative">
          {/* Left Side Image */}
          <div className="w-[704px] h-[682px]">
            <img
              src="/NN1.png" // Replace with your image path
              alt="Neural Universe"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Sub-section */}
          <div className="w-[50%] p-12">
            <p className="text-gray-700 text-lg mb-4">SUMMER 2020</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Part of the Neural Universe</h2>
            <p className="text-gray-600 mb-6">
              We know how larger objects will act. But things on a small scale.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition duration-300">
                Buy Now
              </button>
              <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </section>

        {/* New Section 3: News Section */}
        <section className="w-[1440px] h-[1044px] bg-gray-200 py-12 px-8">
          {/* Heading Sub-section */}
          <div className="w-[631px] h-[194px] mb-8 ml-80 text-center">
            <p className="text-lg text-gray-700 mb-2 text-blue-500 ">Practice Advice</p>
            <h2 className="text-4xl font-bold mb-4">Featured Post</h2>
            <p className="text-gray-600">
              Problems trying to resolve the conflict between the two major realms of classical physics, Newtonian mechanics.
            </p>
          </div>

          {/* News Grid Sub-section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[1045px] h-[606px] ml-32">
            {/* News Item 1 */}
            <div className="flex flex-col items-center">
              <img src="/F1.png" alt="Google News" className="w-full h-[500px] object-cover mb-4" />
              <a href="#" className="text-lg font-semibold text-blue-500 hover:underline">
                Google News
              </a>
            </div>

            {/* News Item 2 */}
            <div className="flex flex-col items-center">
              <img src="/F2.png" alt="Trending News" className="w-full h-[500px] object-cover mb-4" />
              <a href="#" className="text-lg font-semibold text-blue-500 hover:underline">
                Trending News
              </a>
            </div>

            {/* News Item 3 */}
            <div className="flex flex-col items-center">
              <img src="/F3.png" alt="New Releases" className="w-full h-[500px] object-cover mb-4" />
              <a href="#" className="text-lg font-semibold text-blue-500 hover:underline">
                New Releases
              </a>
            </div>
          </div>

          {/* Learn More Link */}
          <div className="mt-8 text-center">
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              Learn More →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}  




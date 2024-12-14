// src/app/shop/page.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const ShopPage = () => {
  return (
    <div className="w-full bg-gray-50">
      <Navbar />

      {/* Breadcrumb Section */}
      <section className="w-full h-[92px] bg-white shadow-md flex items-center justify-between px-10">
        <h2 className="text-3xl font-bold text-blue-600">Shop</h2>
        <p className="text-gray-600">
          Home &gt; <b className="text-gray-800">Shop</b>
        </p>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full max-w-[1440px] mx-auto flex flex-wrap justify-center gap-6 p-8">
        {['1', '2', '3', '4', '5'].map((num) => (
          <a href="/productspecs" key={num} className="transform transition hover:scale-105">
            <img
              src={`/col-md-4 (${num}).png`}
              alt={`Product ${num}`}
              className="w-[205px] h-[223px] object-cover rounded-lg shadow-md"
            />
          </a>
        ))}
      </section>

      {/* Banner Image Section */}
      <section className="w-full max-w-[1440px] mx-auto p-4">
        <img
          src="/row.png"
          alt="Banner"
          className="w-full h-[175px] object-cover rounded-lg shadow-lg"
        />
      </section>

      <h2 className="text-4xl font-bold text-center my-12 text-blue-600">Related Products</h2>

      {/* Filter Section */}
      <section className="w-full max-w-[1440px] mx-auto px-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-lg shadow-md">
          <span className="text-gray-700">Showing all 12 results</span>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">🔲 Grid</button>
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">📄 Vertical</button>
          </div>
          <select className="p-2 border rounded">
            <option value="date">By Date</option>
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
          </select>
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Filter</button>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="w-full max-w-[1440px] mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <a
              href="/productspecs"
              key={index}
              className="block transform transition hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img
                  src={`/col-md-3 (${index + 1}).png`}
                  alt={`Product ${index + 1}`}
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <h3 className="text-white font-semibold">Product {index + 1}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="mt-16 flex justify-center">
        <a href="/shop/page/2" className="transform transition hover:scale-110">
          <img src="/ul.png" alt="Pagination" className="w-[213px] h-[54px] object-cover" />
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;

// src/app/shop/page.tsx
"use client"

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Image from 'next/image';

const categories = [
  { id: 1, name: 'Womens Cloths', items: 7, image: '/11.jpg' },
  { id: 2, name: 'Mens Cloths', items: 4, image: '/12.jpg' },
  { id: 3, name: 'Kids Clothing', items: 5, image: '/13.jpg' },
  { id: 4, name: 'Hijab Collection', items: 2, image: '/14.jpg' },
  { id: 5, name: 'Hoddies', items: 6, image: '/15.jpg' },
];

const products = [
  { id: 1, name: 'Floral Chiffon Dress', category: 'Women\'s Clothing', image: '/16.jpg', description: 'Elegant floral print chiffon dress for casual and formal wear.' },
  { id: 2, name: 'Embroidered Cotton Kurti', category: 'Women\'s Clothing', image: '/17.jpg', description: 'Soft cotton kurti with intricate embroidery, perfect for summer.' },
  { id: 3, name: 'Winter Wool Coat', category: 'Women\'s Clothing', image: '/18.jpg', description: 'Stylish and warm wool coat for a cozy winter look.' },
  { id: 4, name: 'Classic White Frock', category: 'Women\'s Clothing', image: '/19.jpg', description: 'A beautiful and graceful white frock with a modern touch.' },
  { id: 5, name: 'Chic Black Hat Outfit', category: 'Women\'s Clothing', image: '/20.jpg', description: 'A trendy black outfit paired with a stylish hat for a classy look.' },
  { id: 6, name: 'Color Block Sweatshirt', category: 'Women\'s Clothing', image: '/21.jpg', description: 'Vibrant and cozy sweatshirt with a unique color-block design.' },
  { id: 7, name: 'Denim Streetwear Jacket', category: 'Women\'s Clothing', image: '/22.jpg', description: 'Trendy denim jacket for a modern and edgy street style.' },
  { id: 8, name: 'Bold Red Coat', category: 'Women\'s Clothing', image: '/11.jpg', description: 'A striking red coat for a bold and fashionable winter look.' },
  { id: 9, name: 'Casual Blue Denim Jacket', category: 'Women\'s Clothing', image: '/12.jpg', description: 'A must-have denim jacket for everyday casual styling.' },
  { id: 10, name: 'Autumn Floral Dress', category: 'Women\'s Clothing', image: '/13.jpg', description: 'Warm-toned floral dress, perfect for autumn fashion.' },
  { id: 11, name: 'Winter Chic Sweater', category: 'Women\'s Clothing', image: '/14.jpg', description: 'Cozy and stylish sweater to keep you warm in winter.' },
  { id: 12, name: 'Boho Style White Blouse', category: 'Women\'s Clothing', image: '/15.jpg', description: 'A flowy white blouse with a bohemian touch.' },
  { id: 13, name: 'Trendy Oversized Hoodie', category: 'Women\'s Clothing', image: '/16.jpg', description: 'Comfy oversized hoodie for a casual streetwear look.' },
  { id: 14, name: 'Chiffon Sleeve Dress', category: 'Women\'s Clothing', image: '/17.jpg', description: 'A stylish chiffon sleeve dress for elegance and grace.' },
  { id: 15, name: 'Cozy Knitted Yellow Sweater', category: 'Women\'s Clothing', image: '/18.jpg', description: 'A warm and trendy knitted sweater, perfect for chilly days.' },
  { id: 16, name: 'Trench Coat for Winter', category: 'Women\'s Clothing', image: '/19.jpg', description: 'A stylish long trench coat for an elegant winter look.' },
  { id: 17, name: 'Soft White Gown', category: 'Women\'s Clothing', image: '/11.jpg', description: 'A soft and graceful gown for formal and evening wear.' },
  { id: 18, name: 'Autumn Floral Dress', category: 'Women\'s Clothing', image: '/13.jpg', description: 'Warm-toned floral dress, perfect for autumn fashion.' },
  { id: 19, name: 'Winter Chic Sweater', category: 'Women\'s Clothing', image: '/14.jpg', description: 'Cozy and stylish sweater to keep you warm in winter.' },
  { id: 20, name: 'Boho Style White Blouse', category: 'Women\'s Clothing', image: '/15.jpg', description: 'A flowy white blouse with a bohemian touch.' },
  { id: 21, name: 'Trendy Oversized Hoodie', category: 'Women\'s Clothing', image: '/16.jpg', description: 'Comfy oversized hoodie for a casual streetwear look.' },
  { id: 22, name: 'Chiffon Sleeve Dress', category: 'Women\'s Clothing', image: '/17.jpg', description: 'A stylish chiffon sleeve dress for elegance and grace.' },
  { id: 23, name: 'Cozy Knitted Yellow Sweater', category: 'Women\'s Clothing', image: '/18.jpg', description: 'A warm and trendy knitted sweater, perfect for chilly days.' },
  { id: 24, name: 'Trench Coat for Winter', category: 'Women\'s Clothing', image: '/19.jpg', description: 'A stylish long trench coat for an elegant winter look.' },
  { id: 25, name: 'Soft White Gown', category: 'Women\'s Clothing', image: '/11.jpg', description: 'A soft and graceful gown for formal and evening wear.' }
];

const ITEMS_PER_PAGE = 8;

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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

      {/* Categories */}
      <div className="flex gap-4 p-4 justify-center mt-6 flex-wrap">
        {categories.map((category) => (
          <div key={category.id} className="relative w-48 h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105">
            <Image src={category.image} alt={category.name} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white">
              <p className="text-lg font-bold">{category.name}</p>
              <p className="text-sm">{category.items} Items</p>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Image Section */}
      <section className="w-full max-w-[1440px] mx-auto p-4">
        <Image
          src="/row.png"
          alt="Banner"
          width={1440}
          height={175}
          className="w-full h-[175px] object-cover rounded-lg shadow-lg"
        />
      </section>

      <h2 className="text-4xl font-bold text-center my-12 text-blue-600">Related Products</h2>

      {/* Filter Section */}
      <section className="w-full max-w-[1440px] mx-auto px-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-lg shadow-md">
          <span className="text-gray-700">Showing all {products.length} results</span>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-300">🔲 Grid</button>
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-300">📄 Vertical</button>
          </div>
          <select className="p-2 border rounded">
            <option value="date">By Date</option>
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
          </select>
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Filter</button>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="w-full max-w-[1440px] mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {paginatedProducts.map((product) => (
            <a
              href="/products"
              key={product.id}
              className="block transform transition hover:scale-105 duration-300"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={350}
                  height={350}
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-semibold">{product.name}</h3>
                  <p className="text-white text-sm mt-2">{product.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 gap-2 mb-8">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-100 transition-colors duration-300"
        >
          Prev
        </button>
        <span className="text-gray-700">{currentPage} / {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-100 transition-colors duration-300"
        >
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;
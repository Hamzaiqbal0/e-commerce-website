// src/app/shop/page.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const ShopPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <section className="w-full h-[92px] bg-white mx-auto flex items-center justify-between p-4">
        <h2 className="text-2xl font-semibold ml-10">Shop</h2>
        <p className="text-gray-600 mr-10">Home &gt; <b>Shop</b></p>
      </section>

      {/* Image Gallery Section */}
      <section className="w-[1440px] h-[271px] mx-auto flex gap-4 p-4 ml-20">
        <div className="w-[205px] h-[223px] bg-gray-300 flex items-center justify-center">Image 1</div>
        <div className="w-[205px] h-[223px] bg-gray-300 flex items-center justify-center">Image 2</div>
        <div className="w-[205px] h-[223px] bg-gray-300 flex items-center justify-center">Image 3</div>
        <div className="w-[205px] h-[223px] bg-gray-300 flex items-center justify-center">Image 4</div>
        <div className="w-[205px] h-[223px] bg-gray-300 flex items-center justify-center">Image 5</div>
      </section>

      {/* Filter Section */}
      <section className="w-[1440px] h-[98px] mx-auto p-4">
        <div className="w-[1050px] h-[98px] flex items-center justify-between mx-auto">
          {/* Showing Results */}
          <span className="text-gray-700">Showing all 12 results</span>

          {/* View Type Icons */}
          <div className="flex gap-2 ml-16">
            <button className="p-2 bg-gray-200 rounded">🔲 Grid</button>
            <button className="p-2 bg-gray-200 rounded">📄 Vertical</button>
          </div>

          {/* Dropdown Menu */}
          <select className="p-2 border rounded ml-48">
            <option value="date">By Date</option>
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
          </select>

          {/* Filter Button */}
          <button className="p-2 w-20 bg-blue-500 text-white rounded mr-60">Filter</button>
        </div>
      </section>
      <div>
        <section className="w-[1440px] h-[175px] mx-auto p-4 ">
        <img 
          src="/row.png" 
          alt="Banner" 
          className="w-[1054px] h-[175px] mx-auto object-cover ml-28"
        />
      </section>
    </div>
      <Footer />
    </div>
    
    
    
  );
};


export default ShopPage;

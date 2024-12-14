// src/app/shop/page.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const ShopPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      
      {/* Breadcrumb Section */}
      <section className="w-full h-[92px] bg-white mx-auto flex items-center justify-between p-4">
        <h2 className="text-2xl font-semibold ml-10">Shop</h2>
        <p className="text-gray-600 mr-10">Home &gt; <b>Shop</b></p>
      </section>

      {/* Image Gallery Section */}
      <section className="w-[1440px] h-[271px] mx-auto flex gap-4 p-4 ml-20">
        <a href="/productspecs"><img src="/col-md-4 (1).png" alt="Image 1" className="w-[205px] h-[223px] object-cover" /></a>
        <a href="/productspecs"><img src="/col-md-4 (2).png" alt="Image 2" className="w-[205px] h-[223px] object-cover" /></a>
        <a href="/productspecs"><img src="/col-md-4 (3).png" alt="Image 3" className="w-[205px] h-[223px] object-cover" /></a>
        <a href="/productspecs"><img src="/col-md-4 (4).png" alt="Image 4" className="w-[205px] h-[223px] object-cover" /></a>
        <a href="/productspecs"><img src="/col-md-4 (5).png" alt="Image 5" className="w-[205px] h-[223px] object-cover" /></a>
      </section>

      {/* Banner Image Section */}
      <section className="w-[1440px] h-[175px] mx-auto p-4 mb-10">
        <img src="/row.png" alt="Banner" className="w-[1054px] h-[175px] mx-auto object-cover ml-28" />
      </section>

      <h2 className="font-semibold text-2xl text-center mb-12">Related Products</h2>

      {/* Filter Section */}
      <section className="w-[1440px] h-[98px] mx-auto p-4">
        <div className="w-[1050px] h-[98px] flex items-center justify-between mx-auto">
          <span className="text-gray-700">Showing all 12 results</span>
          <div className="flex gap-2 ml-16">
            <button className="p-2 bg-gray-200 rounded">🔲 Grid</button>
            <button className="p-2 bg-gray-200 rounded">📄 Vertical</button>
          </div>
          <select className="p-2 border rounded ml-48">
            <option value="date">By Date</option>
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
          </select>
          <button className="p-2 w-20 bg-blue-500 text-white rounded mr-60">Filter</button>
        </div>
      </section>

      {/* New Section with 3 Subsections and Pagination */}
      <section className="w-[1440px] h-[1778px] mx-auto p-4">
        <div className="w-[1124px] h-[1778px] mx-auto">
          <div className="flex flex-col gap-16">
            {/* Subsection 1 */}
            <div className="flex gap-4">
              <a href="/productspecs"><img src="/col-md-3 (1).png" alt="Image 1" className="w-[238px] h-[488px] object-cover" /></a>
              <a href="/productspecs"><img src="/col-md-3 (2).png" alt="Image 2" className="w-[238px] h-[488px] object-cover" /></a>
              <a href="/productspecs"><img src="/col-md-3 (3).png" alt="Image 3" className="w-[238px] h-[488px] object-cover" /></a>
              <a href="/productspecs"><img src="/col-md-3 (4).png" alt="Image 4" className="w-[238px] h-[488px] object-cover" /></a>
            </div>

            {/* Subsection 2 */}
            <div className="flex gap-4">
              <a href="/productspecs"><img src="/col-md-3 (5).png" alt="Image 5" className="w-[238px] h-[488px] object-cover" /></a>
              <a href="/productspecs"><img src="/col-md-3 (6).png" alt="Image 6" className="w-[238px] h-[488px] object-cover" /></a>
              <a href="/productspecs"><img src="/col-md-3 (7).png" alt="Image 7" className="w-[238px] h-[488px] object-cover" /></a>
              <a href="/productspecs"><img src="/col-md-3 (8).png" alt="Image 8" className="w-[238px] h-[488px] object-cover" /></a>
            </div>

            {/* Subsection 3 */}
            <div className="flex gap-4">
              <a href="/productspecs"><img src="/col-md-3 (9).png" alt="Image 9" className="w-[238px] h-[488px] object-cover" /></a>
              <a href="/productspecs"><img src="/col-md-3 (10).png" alt="Image 10" className="w-[238px] h-[488px] object-cover" /></a>
              <a href="/productspecs"><img src="/col-md-3 (11).png" alt="Image 11" className="w-[238px] h-[488px] object-cover" /></a>
              <a href="/productspecs"><img src="/col-md-3.png" alt="Image 12" className="w-[238px] h-[488px] object-cover" /></a>
            </div>
          </div>

          {/* Pagination Image */}
          <div className="mt-16 flex justify-center">
            <a href="/shop/page/2">
              <img src="/ul.png" alt="Pagination" className="w-[213px] h-[54px] object-cover" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopPage;

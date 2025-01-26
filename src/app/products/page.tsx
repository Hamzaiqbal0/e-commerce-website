import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Link from 'next/link';
import Cloths from '../components/Cloths';

export default function ProductDetails() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      
      {/* Product Section */}
      <section className="w-full flex items-center justify-center bg-gray-50 p-6 md:p-12">
        <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          
          {/* Left Side: Images */}
          <div className="md:w-1/2 flex flex-col items-center justify-center bg-gray-100 p-4">
            <Image
              src="/1.jpg"
              alt="T-shirt"
              width={506}
              height={450}
              className="w-full h-[450px] object-cover rounded-lg"
            />
            <div className="flex mt-4 gap-3">
              <Image
                src="/2.jpg"
                alt="T-shirt Variation 1"
                width={100}
                height={55}
                className="cursor-pointer border rounded hover:border-blue-500 object-cover"
              />
              <Image
                src="/3.jpg"
                alt="T-shirt Variation 2"
                width={100}
                height={55}
                className="cursor-pointer border rounded hover:border-blue-500 object-cover"
              />
            </div>
          </div>

          {/* Right Side: Specifications */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-700">Premium T-Shirt</h1>

            {/* Reviews */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 text-xl">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
              <span className="ml-2 text-sm text-gray-600">(150 Reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold text-blue-600 mb-4">$25.00</p>

            {/* Availability */}
            <p className="text-sm mb-6">
              Availability: <span className="text-green-500 font-medium">In Stock</span>
            </p>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              This high-quality cotton T-shirt is perfect for everyday wear. Soft, comfortable, and available in multiple colors.
            </p>

            {/* Color Choices */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-full cursor-pointer border border-gray-300 hover:ring-2 hover:ring-red-400"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer border border-gray-300 hover:ring-2 hover:ring-blue-400"></div>
              <div className="w-8 h-8 bg-green-500 rounded-full cursor-pointer border border-gray-300 hover:ring-2 hover:ring-green-400"></div>
              <div className="w-8 h-8 bg-black rounded-full cursor-pointer border border-gray-300 hover:ring-2 hover:ring-gray-500"></div>
            </div>

           {/* Buttons */}
           <div className="flex items-center gap-6">
              <Link href="/pricing">
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                  Add to Cart
                </button>
              </Link>

              <div className="flex gap-4">
                <button className="text-gray-600 hover:text-red-500 text-2xl transition-colors duration-300">
                  &#x2764; {/* Heart Icon */}
                </button>
                <button className="text-gray-600 hover:text-blue-500 text-2xl transition-colors duration-300">
                  &#128722; {/* Cart Icon */}
                </button>
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="w-full max-w-5xl mx-auto mt-12 p-4">
        <div className="flex gap-8 justify-center border-b pb-4 mb-8 font-semibold text-lg text-gray-700">
          <a href="#description" className="hover:text-blue-600 hover:underline">Description</a>
          <a href="#additional-info" className="hover:text-blue-600 hover:underline">Additional Information</a>
          <a href="#reviews" className="hover:text-blue-600 hover:underline">Reviews</a>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 bg-gray-100 flex items-center justify-center rounded-lg">
            <Image
              src="/11.avif"
              alt="T-shirt Specifications"
              width={332}
              height={392}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover our premium collection of T-shirts designed to provide unmatched comfort and style. Made from 100% high-quality cotton, these T-shirts are breathable, soft, and perfect for all-day wear.
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Material</h3>
              <p className="text-gray-600">100% Pure Cotton</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Sizes</h3>
              <p className="text-gray-600">Available in S, M, L, XL, XXL</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Care Instructions</h3>
              <p className="text-gray-600">Machine wash cold, tumble dry low</p>
            </div>
          </div>
        </div>
      </section>

      <h1 className="text-blue-600 text-2xl font-bold ml-24 mt-10 underline">BESTSELLER PRODUCTS</h1>
     {/* New Section with 3 Subsections and Pagination */}
     <section className="w-[1440px] h-[1178px] mx-auto p-4 mt-10">
        <div className="w-[1124px] h-[1778px] mx-auto">
          <div className="flex flex-col gap-16">
          < Cloths />

          </div>

          {/* Pagination Image */}
          <div className="mt-16 flex justify-center">
            <a href="/shop/page/2">
              <img src="/ul.png" alt="Pagination" className="w-[213px] h-[54px] object-cover mr-24" />
            </a>
          </div>
        </div>
      </section>
      <section className="w-[1440px] h-[175px] mx-auto p-4 mb-10">
        <img src="/row.png" alt="Banner" className="w-[1054px] h-[175px] mx-auto object-cover ml-28" />
      </section>
      <Footer />
    </div>
    
  );
}

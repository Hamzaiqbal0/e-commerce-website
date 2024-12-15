import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function ProductDetails() {
  return (
    <div><Navbar />
    <section className="w-[full] h-[598px] flex items-center justify-center bg-gray-100 p-8">
      <div className="w-[1050px] h-[550px] flex bg-white shadow-md rounded-lg overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-200">
          <Image
            src="/1.jpg" 
            alt="T-shirt"
            width={506}
            height={450}
            className="w-full h-[450px] object-fill"
          />
          <div className="flex mt-4 gap-2">
            <Image
              src="/2.jpg" 
              alt="T-shirt Variation 1"
              width={100}
              height={55}
              className="cursor-pointer border hover:border-gray-500 object-fill "
            />
            <Image
              src="/3.jpg" 
              alt="T-shirt Variation 2"
              width={100}
              height={55}
              className="cursor-pointer border hover:border-gray-500 object-fill"
            />
          </div>
        </div>

        {/* Right Side: Specifications */}
        <div className="w-1/2 p-6 flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-2">T-shirt</h1>

          {/* Reviews */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-400">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            <span className="ml-2 text-sm text-gray-600">(150 Reviews)</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-green-500 mb-2">$25.00</p>

          {/* Availability */}
          <p className="text-sm text-gray-700 mb-4">Availability: <span className="text-green-500 font-medium">In Stock</span></p>

          {/* Description */}
          <p className="text-gray-600 mb-4">
            This high-quality cotton T-shirt is perfect for everyday wear. Soft, comfortable, and available in multiple colors.
          </p>

          {/* Color Choices */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-full cursor-pointer border"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer border"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full cursor-pointer border"></div>
            <div className="w-8 h-8 bg-black rounded-full cursor-pointer border"></div>
          </div>

          {/* Select Option Button & Icons */}
          <div className="flex items-center gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Select Option
            </button>
            <div className="flex gap-3">
              <button className="text-gray-600 hover:text-red-500">
                &#x2764; {/* Heart Icon */}
              </button>
              <button className="text-gray-600 hover:text-blue-500">
                &#128722; {/* Cart Icon */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
     {/* New Section with Links and Specifications */}
     <section className="w-[1050px] mx-auto mt-8 border-gray-600 ">
      <div className="flex gap-8 mb-10 mt-10 border-b pb-2 justify-center font-semibold text-lg ">
        <a href="#description" className="text-blue-500 hover:underline">Description</a>
        <a href="#additional-info" className="text-blue-500 hover:underline">Additional Information</a>
        <a href="#reviews" className="text-blue-500 hover:underline">Reviews</a>
      </div>

      <div className="flex gap-8">
        <div className="w-[332px] h-[392px] bg-gray-200 flex items-center justify-center">
          <Image
            src="/11.avif" 
            alt="T-shirt Specifications"
            width={332}
            height={392}
            className="object-cover mb-16"
          />
        </div>

        <div className="flex flex-1">       
          <div className="mb-4">
            <p className="text-gray-600">Discover our premium collection of T-shirts designed to provide unmatched comfort and style for your daily wardrobe.
                 Made from 100% high-quality cotton, these T-shirts are breathable, soft, and perfect for all-day wear.<br/><br/>
                 Available in a variety of classic colors and sizes, they cater to everyone preference
                 while the durable fabric promises longevity even after multiple washes.<br/><br/>
                 Elevate your wardrobe with these versatile T-shirts that combine quality, affordability, and timeless design.</p>
                 </div>          
          </div>
          <div>
          <h3 className="text-lg font-semibold mb-2">Material</h3>
          <p className="text-gray-600 mb-4">Available in 100% pure cotton</p>
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

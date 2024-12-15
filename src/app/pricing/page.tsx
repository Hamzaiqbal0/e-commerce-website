// src/app/pricing/page.tsx
import Footer from "../components/footer"

export default function Pricing() {
    return (
      <div className="w-[full] mx-auto px-4">
        <nav className="w-[fullpx] h-[91px] flex justify-between items-center mx-auto mt-4 px-4">
          <h1 className="text-3xl font-bold">Bandage</h1>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-500 font-semibold">Home</a></li>
            <li><a href="/productspecs" className="hover:text-gray-500 font-semibold">Product</a></li>
            <li><a href="/pricing" className="hover:text-gray-500 font-semibold">Pricing</a></li>
            <li><a href="/contact" className="hover:text-gray-500 font-semibold">Contact</a></li>
          </ul>
          <div className="flex space-x-4 items-center">
            <a href="/login" className="hover:text-gray-500">Login</a>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Become a Member →
            </button>
          </div>
        </nav>
        {/* First Section: Pricing Header */}
        <section className="w-[870px] h-[280px] mx-auto mt-12 text-center">
          <h1 className="text-lg mb-4">Pricing</h1>
          <h2 className="text-3xl font-semibold mb-4">Simple Pricing</h2>
          <nav className="text-gray-500">
            <span className="hover:text-gray-700 cursor-pointer">
              Home
            </span>{" "}
            &gt; <span className="text-black font-semibold">Pricing</span>
          </nav>
        </section>
  
        {/* Second Section: Pricing Options */}
        <section className="w-full mt-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-gray-600 mb-6">
            Choose the plan that fits your needs. Flexible options designed for you.
            Switch between monthly and yearly subscriptions with ease.
          </p>
  
          {/* Subscription Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <label className="flex items-center cursor-pointer">
              <span className="text-lg font-medium mr-2">Monthly</span>
              <div className="relative">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition"></div>
                <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full peer-checked:translate-x-6 transition-transform"></div>
              </div>
              <span className="text-lg font-medium ml-2">Yearly</span>
            </label>
            <div className="ml-4 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Save 25%
            </div>
          </div>
        </section>
 {/* Third Section: Subscription Plan Images with Pop-Up Effect */}
<section className="w-full mt-16 flex justify-center items-end gap-6">
  {/* Left Image */}
  <div className="w-[327px] h-[664px] overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <img
      src="/xyz1.png"
      alt="Image 1"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Center Image (Lifted) */}
  <div className="w-[327px] h-[664px] overflow-hidden rounded-lg shadow-xl -mt-16 transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl">
    <img
      src="/xyz2.png"
      alt="Image 2"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Image */}
  <div className="w-[327px] h-[664px] overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <img
      src="/xyz3.png"
      alt="Image 3"
      className="w-full h-full object-cover"
    />
  </div>
</section>

        <Footer />
      </div>
    );
  }
  
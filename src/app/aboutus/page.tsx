// src/app/about/page.tsx
export default function AboutUs() {
    return (
      <div className="w-[1440px] h-[729px] mx-auto">
        {/* Navbar */}
        <nav className="w-[1322px] h-[91px] flex justify-between items-center mx-auto mt-4 px-4">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-500">Home</a></li>
            <li><a href="/productspecs" className="hover:text-gray-500">Product</a></li>
            <li><a href="/pricing" className="hover:text-gray-500">Pricing</a></li>
            <li><a href="/contact" className="hover:text-gray-500">Contact</a></li>
          </ul>
          <div className="flex space-x-4 items-center">
            <a href="/login" className="hover:text-gray-500">Login</a>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Become a Member →
            </button>
          </div>
        </nav>
  
        {/* Main Section */}
        <div className="flex w-[1322px] mx-auto mt-8 items-center">
          {/* Left Side */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6">
              Discover our range of high-quality products designed to meet your needs.
            </p>
            <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600">
              Get Quote Now
            </button>
          </div>
  
          {/* Right Side */}
          <div className="w-[632px] h-[612px]">
            <img
              src="/none.png"
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-[1440px] h-[236px]">
            <img
              src="/container.png"
              alt="About Us"
              className="w-full h-full object-cover"></img>
              </div>
      </div>
    );
  }
  
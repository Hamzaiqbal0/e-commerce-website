// src/app/about/page.tsx
import Footer from '../components/footer';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function AboutUs() {
    return (
      <div className="w-[1340px] h-[729px] mx-auto">
        {/* Navbar */}
        <nav className="w-[1322px] h-[91px] flex justify-between items-center mx-auto mt-4 px-4">
          <h1 className="text-3xl font-bold">Bandage</h1>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-500 font-semibold">Home</a></li>
            <li><a href="/productspecs" className="hover:text-gray-500 font-semibold">Product</a></li>
            <li><a href="/pricing" className="hover:text-gray-500 font-semibold">Pricing</a></li>
            <li><a href="/contactus" className="hover:text-gray-500 font-semibold">Contact</a></li>
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
            <p className="text-lg mb-4">
              Discover our range of high-quality products designed to meet your needs.
            </p>
            <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 mb-56">
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
        <div className="w-[1340px] h-[236px]">
            <img
              src="/container.png"
              alt="About Us"
              className="w-full h-full object-cover"></img>
              </div>

              <div className="w-[1340px] h-[264px]">
            <img
              src="/321.png"
              alt="About Us"
              className="w-full h-full object-cover"></img>
              </div>
              {/* Second Section with Video */}
      <div className="w-[1440px] h-[764px] mx-auto flex justify-center items-center bg-gray-100 mt-8">
        <video
          className="w-[989px] h-[540px] rounded-lg shadow-lg"
          controls>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
         {/* Third Section: Meet Our Team */}
      <div className="w-[1440px] h-[576px] bg-gray-100 mx-auto mt-8 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Meet Our Team</h2>
        <p className="text-lg text-center mb-8">
          Learn more about the amazing individuals who make our website possible. 
          We are a team of dedicated professionals ready to help you.
        </p>

        {/* Sub-section for Team Members */}
        <div className="w-[1034px] h-[283px] mx-auto flex justify-between items-center">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center w-[316px] h-[152px]">
            <img
              src="/media.png"
              alt="Team Member 1"
              className="w-[316px] h-[231px]  mb-2"
            />
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">Software Engineer</p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF size={20} /></a>
              <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={20} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center w-[316px] h-[152px]">           
            <img
              src="/media (2).png"
              alt="Team Member 2"
              className="w-[316px] h-[231px] mb-2"
            />
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-sm text-gray-500">Product Manager</p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF size={20} /></a>
              <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={20} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center w-[316px] h-[152px]">
          <img
              src="/media (1).png"
              alt="Team Member 3"
              className="ww-[316px] h-[231px] mb-2"
            />
            <h3 className="text-lg font-semibold">Alice Brown</h3>
            <p className="text-sm text-gray-500">UX Designer</p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF size={20} /></a>
              <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={20} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
            </div>
          </div>
        </div>
      </div>
      <img
              src="/full.png"
              alt="Team Member 3"
              className="ww-[1440px] h-[636px] mb-2 "
            />
              <Footer />            
      </div>
    );
  }
  
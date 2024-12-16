import Footer from '../components/footer';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="w-full mx-auto bg-gray-50">
      {/* Navbar */}
      <nav className="w-full max-w-[1340px] mx-auto flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-b-lg">
        <h1 className="text-4xl font-bold text-blue-600">Bandage</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-blue-500 font-semibold transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/productspecs" className="hover:text-blue-500 font-semibold transition duration-300">
              Product
            </a>
          </li>
          <li>
            <a href="/pricing" className="hover:text-blue-500 font-semibold transition duration-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="/contactus" className="hover:text-blue-500 font-semibold transition duration-300">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex space-x-4 items-center">
          <a href="/login" className="hover:text-blue-500 transition duration-300">
            Login
          </a>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
            Become a Member →
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <section className="max-w-[1340px] mx-auto flex flex-col lg:flex-row items-center py-16 px-8 gap-12">
        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Discover our range of high-quality products designed to meet your needs. We prioritize excellence and innovation to deliver the best solutions.
          </p>
          <button className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition duration-300">
            Get Quote Now
          </button>
        </div>

        {/* Right Side Image with Hover Effect */}
        <div className="flex-1 relative">
          <img
            src="/none.png"
            alt="About Us"
            className="w-full h-[500px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Images Section */}
      <div className="max-w-[1340px] mx-auto  md:grid-cols-2 gap-6 px-8 mb-16">
        <img src="/container.png" alt="About Us" className="w-full h-[300px] object-cover rounded-lg shadow-md hover:opacity-90 transition duration-300" />
        <img src="/321.png" alt="About Us" className="w-full h-[300px] object-cover rounded-lg shadow-md hover:opacity-90 transition duration-300" />
      </div>

      {/* Video Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Discover Our Story</h2>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <video className="w-full max-w-[900px] mx-auto rounded-lg" controls>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="max-w-[1440px] mx-auto py-16 px-8">
        <h2 className="text-5xl font-bold text-center mb-4">Meet Our Team</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Learn more about the amazing individuals who make our vision possible.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Team Member 1 */}
          <div className="w-64 flex flex-col items-center text-center">
            <img src="/media.png" alt="John Doe" className="w-64 h-64 object-cover rounded-full shadow-lg mb-4 hover:scale-105 transition-transform duration-300" />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">Software Engineer</p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="w-64 flex flex-col items-center text-center">
            <img src="/media (2).png" alt="Jane Smith" className="w-64 h-64 object-cover rounded-full shadow-lg mb-4 hover:scale-105 transition-transform duration-300" />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">Product Manager</p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="w-64 flex flex-col items-center text-center">
            <img src="/media (1).png" alt="Alice Brown" className="w-64 h-64 object-cover rounded-full shadow-lg mb-4 hover:scale-105 transition-transform duration-300" />
            <h3 className="text-xl font-semibold">Alice Brown</h3>
            <p className="text-gray-500">UX Designer</p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <div className="w-full">
        <img src="/full.png" alt="Team Image" className="w-full h-[500px] object-cover" />
      </div>

      <Footer />
    </div>
  );
}

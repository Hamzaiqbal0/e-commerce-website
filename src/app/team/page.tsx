import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Footer from '../components/footer';

export default function Team() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      {/* Navigation */}
      <nav className="w-full h-[91px] flex justify-between items-center mx-auto px-4 shadow-md bg-white rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600">Bandage</h1>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-blue-500 font-semibold transition duration-200">Home</a></li>
          <li><a href="/productspecs" className="hover:text-blue-500 font-semibold transition duration-200">Product</a></li>
          <li><a href="/pricing" className="hover:text-blue-500 font-semibold transition duration-200">Pricing</a></li>
          <li><a href="/contactus" className="hover:text-blue-500 font-semibold transition duration-200">Contact</a></li>
        </ul>
        <div className="flex space-x-4 items-center">
          <a href="/login" className="hover:text-blue-500 transition duration-200">Login</a>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
            Become a Member →
          </button>
        </div>
      </nav>

      {/* What We Do */}
      <p className="text-lg text-gray-600 mb-4 text-center mt-12 tracking-wide">WHAT WE DO</p>

      {/* Innovation Heading */}
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-800">Innovation Tailored for You</h1>

      {/* Breadcrumb */}
      <div className="text-lg text-gray-500 mb-8 text-center">
        <Link href="/" className="hover:underline text-blue-600">Home</Link> &gt; <span className="text-gray-700 font-semibold">Team</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="col-span-1">
          <Image
            src="/q1.png"
            alt="Team Member 1"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-6">
          {['/q2.png', '/q3.png', '/q4.png', '/q5.png'].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Team Member ${index + 2}`}
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Start Your 14-Day Free Trial</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Join us today and experience how our innovative solutions can help you achieve your goals. No commitment, cancel anytime!
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-full hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg">
          Try it for Free
        </button>
      </div>

      {/* Team Members Section */}
      <div className="text-4xl font-bold text-blue-600 text-center mb-10">Meet Our Team</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={member.image}
              alt={member.name}
              width={316}
              height={231}
              className="w-full h-auto rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <div className="flex space-x-4 mt-3">
              <Link href="#"><FaFacebookF size={20} className="text-blue-600 hover:text-blue-800 transition duration-200" /></Link>
              <Link href="#"><FaInstagram size={20} className="text-pink-500 hover:text-pink-700 transition duration-200" /></Link>
              <Link href="#"><FaTwitter size={20} className="text-blue-400 hover:text-blue-600 transition duration-200" /></Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Team Members Data
const teamMembers = [
  { name: 'John Doe', role: 'Software Engineer', image: '/media.png' },
  { name: 'Jane Smith', role: 'Product Manager', image: '/media (2).png' },
  { name: 'Alice Brown', role: 'UX Designer', image: '/media (1).png' },
  { name: 'Robert White', role: 'DevOps Engineer', image: '/media (3).png' },
  { name: 'Emily Clark', role: 'Marketing Specialist', image: '/media (4).png' },
  { name: 'Michael Green', role: 'QA Engineer', image: '/c4.png' },
  { name: 'Sarah Black', role: 'Data Scientist', image: '/c1.png' },
  { name: 'William Scott', role: 'Frontend Developer', image: '/c2.png' },
  { name: 'Olivia Davis', role: 'Backend Developer', image: '/c3.png' },
];

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Footer from '../components/footer';

export default function Team() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-8">
      <nav className="w-full h-[91px] flex justify-between items-center mx-auto px-4">
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

      {/* What We Do */}
      <p className="text-lg text-gray-600 mb-4 text-center mt-8">WHAT WE DO</p>

      {/* Innovation Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">Innovation Tailored for You</h1>

      {/* Breadcrumb */}
      <div className="text-lg text-gray-500 mb-8 text-center">
        <Link href="/" className="hover:underline">Home</Link> &gt; <span className="text-gray-700 font-semibold">Team</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mb-12">
        <div className="col-span-1">
          <Image
            src="/q1.png"
            alt="Team Member 1"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-4">
          <Image
            src="/q2.png"
            alt="Team Member 2"
            width={200}
            height={200}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            src="/q3.png"
            alt="Team Member 3"
            width={200}
            height={200}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            src="/q4.png"
            alt="Team Member 4"
            width={200}
            height={200}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Image
            src="/q5.png"
            alt="Team Member 5"
            width={200}
            height={200}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <h2 className="text-3xl font-bold mb-4 text-center">Start Your 14-Day Free Trial</h2>
      <p className="text-gray-600 mb-6 text-center">
        Join us today and experience how our innovative solutions can help you achieve your goals. No commitment, cancel anytime!
      </p>
      <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 mb-8 ml-96">
        Try it for Free
      </button>

      {/* Team Members Section */}
      <div className="grid grid-cols-3 gap-0 mb-12 border">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center w-[316px] mx-auto">
            <Image
              src={member.image}
              alt={member.name}
              width={316}
              height={231}
              className="w-full h-auto mb-2"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <div className="flex space-x-3 mt-2 mb-4">
              <Link href="#"><FaFacebookF size={20} className="text-blue-600 hover:text-blue-800" /></Link>
              <Link href="#"><FaInstagram size={20} className="text-pink-500 hover:text-pink-700" /></Link>
              <Link href="#"><FaTwitter size={20} className="text-blue-400 hover:text-blue-600" /></Link>
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

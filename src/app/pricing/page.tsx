"use client";
import { useState } from "react";
import Footer from "../components/footer";
import SignInSignUp from "../sign/page"; // Import the SignInSignUp component

export default function Pricing() {
  // FAQ Data
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, MasterCard, PayPal, and bank transfers.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with full access to all features.",
    },
    {
      question: "Can I change my subscription plan later?",
      answer: "Absolutely! You can upgrade or downgrade your plan anytime.",
    },
    {
      question: "Is there a discount for yearly plans?",
      answer: "Yes, yearly plans come with a 25% discount compared to monthly plans.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, there are no hidden fees. You only pay the price you see.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption to protect your data.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel anytime without any penalties.",
    },
    {
      question: "Do you offer support for setup?",
      answer: "Yes, our support team is available to help you with setup 24/7.",
    },
    {
      question: "How do I get in touch with support?",
      answer: "You can contact our support team via email, chat, or phone.",
    },
  ];

  // State for active FAQ
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Toggle FAQ
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Toggle Popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="w-[full] mx-auto px-4">
      <nav className="w-full max-w-[1340px] mx-auto flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-b-lg">
        <h1 className="text-4xl font-bold text-blue-600">Bandage</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-blue-500 font-semibold transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-blue-500 font-semibold transition duration-300">
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
          <button onClick={togglePopup} className="hover:text-blue-500 transition duration-300">
            Login
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
            Become a Member →
          </button>
        </div>
      </nav>

      {/* Show SignIn/SignUp Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <SignInSignUp />
            <button
              className="mt-4 text-red-500 hover:underline"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* First Section: Pricing Header */}
      <section className="w-[870px] h-[180px] mx-auto mt-12 text-center">
        <h1 className="text-lg mb-4">Pricing</h1>
        <h2 className="text-3xl font-semibold mb-4">Least Pricing with Great Value</h2>
        <nav className="text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span> &gt;{" "}
          <span className="text-black font-semibold">Pricing</span>
        </nav>
      </section>

      {/* Second Section: Pricing Options */}
      <section className="w-full mt-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p className="text-lg text-gray-600 mb-6">
          Choose the plan that fits your needs. Flexible options designed for you. Switch between monthly and yearly subscriptions with ease.
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
        <div className="w-[327px] h-[664px] overflow-hidden rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
          <img src="/xyz1.png" alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[327px] h-[664px] overflow-hidden rounded-lg shadow-xl -mt-16 transform transition-transform duration-200 hover:scale-110 hover:shadow-2xl">
          <img src="/xyz2.png" alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-[327px] h-[664px] overflow-hidden rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
          <img src="/xyz3.png" alt="Image 3" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Pricing FAQs Section */}
      <section className="w-full max-w-4xl mx-auto mt-20 mb-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Pricing FAQs</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-2xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && <p className="text-gray-600 pb-4 pl-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

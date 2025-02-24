"use client";
import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

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
  const [isYearly, setIsYearly] = useState(false);

  // Toggle FAQ
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Toggle Subscription
  const toggleSubscription = () => {
    setIsYearly(!isYearly);
  };

  // Pricing Plans Data
  const plans = [
    {
      name: "PREMIUM",
      price: "19.99",
      features: [
        "15% Discount on Products",
        "Unlimited product updates",
        "Unlimited product Design",
        "10GB Cloud storage",
        "Email and community support",
      ],
      highlight: false,
    },
    {
      name: "STANDARD",
      price: "9.99",
      features: [
        "5% Discount on Products",
        "Unlimited product updates",
        "Limited product Designs",
        "2GB Cloud storage",
        "Email and community support",
      ],
      highlight: true,
    },
    {
      name: "FREE",
      price: "0.00",
      features: [
        "No Discount",
        "Limited product updates",
        "Limited product Design",
        "1GB Cloud storage",
        "Email and community support",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />

      {/* First Section: Pricing Header */}
      <section className="w-full max-w-4xl mx-auto mt-12 text-center">
        <h1 className="text-lg sm:text-xl mb-4 text-gray-600">Pricing</h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Least Pricing with Great Value</h2>
        <nav className="text-gray-500 text-sm sm:text-base">
          <span className="hover:text-gray-700 cursor-pointer">Home</span> &gt;{" "}
          <span className="text-black font-semibold">Pricing</span>
        </nav>
      </section>

      {/* Second Section: Pricing Options */}
      <section className="w-full max-w-4xl mx-auto mt-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pricing</h2>
        <p className="text-sm sm:text-lg text-gray-600 mb-6">
          Choose the plan that fits your needs. Flexible options designed for you. Switch between monthly and yearly subscriptions with ease.
        </p>

        {/* Subscription Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <label className="flex items-center cursor-pointer">
            <span className="text-sm sm:text-lg font-medium mr-2">Monthly</span>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isYearly}
                onChange={toggleSubscription}
              />
              <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition"></div>
              <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full peer-checked:translate-x-6 transition-transform"></div>
            </div>
            <span className="text-sm sm:text-lg font-medium ml-2">Yearly</span>
          </label>
          <div className="bg-green-500 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
            Save 25%
          </div>
        </div>
      </section>

      {/* Fourth Section: Pricing Table */}
      <section className="w-full max-w-6xl mx-auto mt-12 sm:mt-20 bg-gray-100 p-6">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg border transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl ${
                plan.highlight ? "bg-gray-900 text-white" : "bg-white text-gray-900"
              }`}
            >
              <h2 className="text-2xl font-semibold text-center">{plan.name}</h2>
              <p className="text-center text-4xl font-bold my-4">
                {plan.price} <span className="text-lg">$ Per Month</span>
              </p>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-2 text-white font-semibold rounded-lg transition bg-blue-500 hover:bg-blue-700">
                Try for free
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Fifth Section: Pricing FAQs */}
      <section className="w-full max-w-4xl mx-auto mt-12 sm:mt-20 mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Pricing FAQs</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left text-sm sm:text-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-xl sm:text-2xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="text-sm sm:text-base text-gray-600 pb-4 pl-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
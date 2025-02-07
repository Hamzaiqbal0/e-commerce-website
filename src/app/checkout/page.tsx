"use client";

import { useState, useEffect } from "react";
import { getCartItems } from "@/app/actions/actions";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  // Fetch cart items on component mount
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems();
        setCartItems(items || []);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        toast.error("Failed to fetch cart items.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Calculate the subtotal from the cart items
  const subtotal = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.inventory || 0),
    0
  );

  // Calculate a fixed 15% discount
  const discountPercentage = 0.15;
  const discountAmount = subtotal * discountPercentage;
  const discountedSubtotal = subtotal - discountAmount;

  // Calculate tax (assumed 10% of the discounted subtotal)
  const taxRate = 0.05;
  const taxAmount = discountedSubtotal * taxRate;

  // Final total after discount and tax
  const finalTotal = discountedSubtotal + taxAmount;

  // Handle input changes for the billing form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.id]: false,
    });
  };

  // Validate that all required form fields are filled
  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  // Handle placing the order
  const handlePlaceOrder = async () => {
    console.log("Place Order button clicked");

    if (!validateForm()) {
      toast.error("Please fill in all the fields.");
      console.log("Form validation failed:", formValues);
      return;
    }

    // Prepare order data including the calculated price breakdown
    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      subtotal: subtotal,
      discount: discountAmount,
      discountedSubtotal: discountedSubtotal,
      tax: taxAmount,
      total: finalTotal,
      orderDate: new Date().toISOString(),
    };

    console.log("Order data:", orderData);

    try {
      await client.create(orderData);
      toast.success("Order placed successfully!");
      alert("Order placed successfully!");
      console.log("Order created successfully");
    } catch (error) {
      console.error("Failed to place order. Please try again.", error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Breadcrumb Navigation */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-[#666666] hover:text-black transition text-md"
            >
              Cart
            </Link>
            <span className="text-md font-semibold">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary Section */}
            <div className="bg-white border rounded-lg p-6 space-y-4 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 py-3 border-b last:border-b-0"
                  >
                    <div className="w-16 h-16 rounded overflow-hidden">
                      {item.image ? (
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.productName || "Product Image"}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-500">No Image</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.productName}</h3>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.inventory}
                      </p>
                    </div>
                    <p className="text-sm font-medium">
                      ${(item.price * item.inventory).toFixed(2)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              )}

              {/* Price Breakdown */}
              <div className="text-right border-t pt-4">
                <p className="text-md flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </p>
                <p className="text-md flex justify-between">
                  <span>Discount (15%):</span>
                  <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                </p>
                <p className="text-md flex justify-between">
                  <span>Subtotal after Discount:</span>
                  <span className="font-semibold">${discountedSubtotal.toFixed(2)}</span>
                </p>
                <p className="text-md flex justify-between">
                  <span>Tax (5%):</span>
                  <span className="font-semibold">${taxAmount.toFixed(2)}</span>
                </p>
                <p className="text-xl font-bold flex justify-between mt-2">
                  <span>Total:</span>
                  <span className="text-blue-600">${finalTotal.toFixed(2)}</span>
                </p>
              </div>
            </div>

            {/* Billing Form Section */}
            <div className="bg-white border rounded-lg p-6 space-y-6 shadow-sm">
              <h2 className="text-xl font-semibold">Billing Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "First Name", id: "firstName" },
                  { label: "Last Name", id: "lastName" },
                ].map(({ label, id }) => (
                  <div key={id} className="space-y-1">
                    <label
                      htmlFor={id}
                      className="text-sm font-semibold text-gray-700"
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      value={formValues[id as keyof typeof formValues]}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors[id as keyof typeof formErrors]
                          ? "ring-2 ring-red-500 border-red-500"
                          : "focus:ring-blue-500"
                      }`}
                    />
                    {formErrors[id as keyof typeof formErrors] && (
                      <p className="text-sm text-red-500">
                        {label} is required.
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {["address", "city", "zipCode", "phone", "email"].map((id) => (
                <div key={id} className="space-y-1">
                  <label
                    htmlFor={id}
                    className="text-sm font-semibold text-gray-700"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </label>
                  <input
                    id={id}
                    placeholder={`Enter your ${id}`}
                    value={formValues[id as keyof typeof formValues]}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      formErrors[id as keyof typeof formErrors]
                        ? "ring-2 ring-red-500 border-red-500"
                        : "focus:ring-blue-500"
                    }`}
                  />
                  {formErrors[id as keyof typeof formErrors] && (
                    <p className="text-sm text-red-500">
                      {id.charAt(0).toUpperCase() + id.slice(1)} is required.
                    </p>
                  )}
                </div>
              ))}

              <button
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

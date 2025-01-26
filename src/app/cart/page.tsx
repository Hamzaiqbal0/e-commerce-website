"use client";

import { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import { Product } from "../../../types/products";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Your item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Proceeded!", "Your order has been successfully placed.", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <>
    < Navbar />
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 mt-6 text-gray-800">Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-gray-50 flex flex-col sm:flex-row items-center shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4"
              >
                {/* Product Image */}
                {item.image?.asset?._ref ? (
  (() => {
    const imageUrl = urlFor(item.image.asset).url();
    console.log("Generated Image URL:", imageUrl); // Debugging the generated URL
    return (
      <Image
        src={imageUrl || ""}
        alt={item.name || "Product Image"}
        className="w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4 border"
        width={128}
        height={128}
      />
    );
  })()
) : (
  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-lg mb-4 sm:mb-0 sm:mr-4 border">
    <span className="text-gray-500">No Image</span>
  </div>
)}




                {/* Product Details */}
                <div className="sm:ml-4 flex-1 text-center sm:text-left">
                  <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors ">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">${item.price.toFixed(2)}</p>
                
                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 mt-8 sm:mt-0 ">
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-red-400 mt-2"
                    onClick={() => handleDecrement(item._id)}
                  >
                    -
                  </button>
                  <span className="px-4 text-gray-800 font-bold mt-2">{item.inventory}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-green-400 mt-2"
                    onClick={() => handleIncrement(item._id)}
                  >
                    +
                  </button>
                </div>
                </div>
                {/* Remove Button */}
                <button
                  className="text-white hover:bg-red-700 mt-4 sm:mt-0 bg-red-500 rounded-lg py-2 px-6"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Subtotal:</p>
              <p className="text-xl font-semibold text-gray-800">${calculateTotal().toFixed(2)}</p>
            </div>
            <button
              onClick={handleProceed}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
          <p className="text-gray-600 mt-2">Add some items to get started!</p>
        </div>
      )}
    </div>
    < Footer />
    </>
  );
  
};

export default CartPage;

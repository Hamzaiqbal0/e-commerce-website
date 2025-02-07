"use client";

import { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import { Product } from "../../../types/products";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CartItem {
  product: Product;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const items = getCartItems();
    const cartData: CartItem[] = items.map((item) => ({
      product: item,
      quantity: 1, // Default quantity
    }));
    setCartItems(cartData);
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
        setCartItems((prev) => prev.filter((item) => item.product._id !== id));
        Swal.fire("Removed!", "Your item has been removed.", "success");
      }
    });
  };

  const handleIncrement = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    const discount = subtotal * 0.15; // 15% discount
    const tax = 0.00; // Static sales tax (can be updated later)
    const total = subtotal - discount + tax;
    return { subtotal, discount, tax, total };
  };

  const router = useRouter();
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
        router.push("/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-10 mt-6 text-gray-800">
          Your Shopping Cart
        </h1>
        {cartItems.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map(({ product, quantity }) => (
                <div
                  key={product._id}
                  className="bg-gray-50 flex flex-col sm:flex-row items-center shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4"
                >
                  {/* Product Image */}
                  {product.image ? (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name || "Product Image"}
                      className="w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4 border"
                      width={128}
                      height={128}
                    />
                  ) : (
                    <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-lg mb-4 sm:mb-0 sm:mr-4 border">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}

                  {/* Product Details */}
                  <div className="sm:ml-4 flex-1 text-center sm:text-left">
                    <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      ${product.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2 mt-8 sm:mt-0">
                      <button
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-red-400 mt-2"
                        onClick={() => handleDecrement(product._id)}
                      >
                        -
                      </button>
                      <span className="px-4 text-gray-800 font-bold mt-2">
                        {quantity}
                      </span>
                      <button
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-green-400 mt-2"
                        onClick={() => handleIncrement(product._id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="text-white hover:bg-red-700 mt-4 sm:mt-0 bg-red-500 rounded-lg py-2 px-6"
                    onClick={() => handleRemove(product._id)}
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
                <p className="text-xl font-semibold text-gray-800">
                  ${calculateTotal().subtotal.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Discount (15%):</p>
                <p className="text-xl font-semibold text-gray-800">
                  -${calculateTotal().discount.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Sales Tax:</p>
                <p className="text-xl font-semibold text-gray-800">${calculateTotal().tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Total:</p>
                <p className="text-xl font-semibold text-gray-800">
                  ${calculateTotal().total.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <Link href="/checkout">
                <button
                  onClick={handleProceed}
                  className="bg-blue-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Proceed to Checkout
                  
                </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
            <p className="text-gray-600 mt-2">Add some items to get started!</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
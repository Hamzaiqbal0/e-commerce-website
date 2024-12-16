// src/app/auth/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => setIsSignIn(!isSignIn);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className={`text-3xl font-bold text-center mb-6 ${isSignIn ? 'text-blue-600' : 'text-green-600'}`}>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>

        <form className="space-y-5">
          {!isSignIn && (
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-bold text-white transition duration-300 ${
              isSignIn ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>

          <p className="text-center text-gray-600">
            {isSignIn ? (
              <>
                Don't have an account?{' '}
                <button
                  type="button"
                  className="text-green-500 hover:underline"
                  onClick={toggleForm}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={toggleForm}
                >
                  Sign In
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}

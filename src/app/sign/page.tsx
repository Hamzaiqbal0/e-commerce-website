"use client";

export default function Sign() {
  return (
    <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In to Bandage</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded-md focus:outline-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded-md focus:outline-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

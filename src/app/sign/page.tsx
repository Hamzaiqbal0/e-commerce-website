"use client";

interface SignInSignUpProps {
  onClose: () => void;
}

export default function SignInSignUp({ onClose }: SignInSignUpProps) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In / Sign Up</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-500 hover:underline w-full text-center">
          Close
        </button>
      </div>
    </div>
  );
}

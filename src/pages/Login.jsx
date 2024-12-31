import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
        
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold text-[50px]  text-center">Fashion<span className="text-primary">Cart</span></h1>
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center">Login</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="text-right">
            <Link
              to=""
              className="text-primary hover:text-red-800 text-sm"
            >
              Forgot Password
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary hover:bg-red-700 text-white rounded-md transition-colors"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-gray-600">
          <p>
            Not a Member?{" "}
            <Link
              to="/signup"
              className="text-primary hover:text-red-800"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
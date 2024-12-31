import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold text-[50px]  text-center">Fashion<span className="text-primary">Cart</span></h1>
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center">Sign Up</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Create Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary hover:bg-red-700 text-white rounded-md transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-gray-600">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-red-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
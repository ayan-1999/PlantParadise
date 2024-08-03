import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[rgba(241,243,204,1)]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-900 mb-6">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/signup" className="text-green-800 hover:text-green-950">
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

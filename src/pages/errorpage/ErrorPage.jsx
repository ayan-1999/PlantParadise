import React from "react";
import { Link } from "react-router-dom";
import img from "/errorpage/image1.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const ErrorPage = () => {
  return (
    <>
    <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[rgba(241,243,204,1)] py-4 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-green-900 mb-4">Oops!</h1>
          <p className="text-lg text-gray-700 mb-8">
            We can't seem to find the page you're looking for.
          </p>
          <div className="flex justify-center mb-8">
            <img
              src={img}
              alt="Lost Plant"
              className="w-64 h-64 object-cover rounded-md shadow-lg"
            />
          </div>
          <Link
            to="/home"
            className="inline-block bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ErrorPage;

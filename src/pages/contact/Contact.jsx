import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[rgb(241,243,204)] py-4 px-36">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-green-900 mb-6">Contact Us</h1>
          <p className="text-center text-lg text-gray-700 mb-8">
            We would love to hear from you! Whether you have a question about our products, need assistance, or just want to talk about plants, we're here to help.
          </p>
          <div className="flex flex-wrap -mx-4 mb-12">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">Contact Form</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Your Email" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows="4" placeholder="Your Message"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">Feel free to reach out to us directly through the following:</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="material-icons text-green-700 mr-2">location_on</span>
                    <span className="text-gray-700">123 Green </span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-icons text-green-700 mr-2">phone</span>
                    <span className="text-gray-700">9088727340</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-icons text-green-700 mr-2">email</span>
                    <span className="text-gray-700">info@plantparadise.com</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-green-800 mb-2">Follow Us</h2>
                  <div className="flex space-x-4">
                    {/* Replace # with actual links */}
                    <a href="#" className="text-green-700 hover:text-green-800"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-green-700 hover:text-green-800"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-green-700 hover:text-green-800"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-green-700 hover:text-green-800"><i className="fab fa-pinterest"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

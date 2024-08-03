import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const services = [
  {
    title: "Plant Delivery",
    description:
      "We offer fast and reliable delivery services to bring your favorite plants directly to your doorstep.",
    icon: "🚚", 
  },
  {
    title: "Custom Plant Arrangements",
    description:
      "Our expert team creates beautiful custom plant arrangements for any occasion or space.",
    icon: "🌿", 
  },
  {
    title: "Plant Care Guides",
    description:
      "Access our extensive library of plant care guides to help you keep your plants thriving.",
    icon: "📚", 
  },
  {
    title: "Consultation Services",
    description:
      "Get personalized advice from our plant experts to choose the right plants for your home or office.",
    icon: "🧑‍🌾", 
  },
];
const Service = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="bg-[rgba(241,243,204,1)] py-4 px-36">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-green-900 mb-6">
            Our Services
          </h1>
          <p className="text-center text-lg text-gray-700 mb-8">
            At Plant Paradise, we offer a wide range of services to meet all
            your plant needs. From delivery to personalized consultations, we're
            here to help you grow your green space.
          </p>
          <div className="flex flex-wrap -mx-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-semibold text-green-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const teamMembers = [
  {
    name: "Mr.abcd",
    role: "Founder & CEO",
    image: "/about.member/image1.png",
  },
  {
    name: "Mr. xyz",
    role: "Head of Marketing",
    image: "/about.member/image2.png",
  },
  // Add more team members as needed
];
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[rgba(241,243,204,1)] py-4 px-36">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-green-900 mb-6">
            About Us
          </h1>
          <p className="text-center text-lg text-gray-700 mb-8">
            Welcome to Plant Paradise! We are passionate about bringing the
            beauty and benefits of plants into every home.
          </p>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to provide high-quality plants and gardening
              supplies to plant lovers everywhere. Whether you're a seasoned
              gardener or just getting started, we're here to help you cultivate
              a thriving green space.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Meet Our Team
            </h2>
            <div className="flex flex-wrap -mx-4">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-green-900">
                        {member.name}
                      </h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-4">
              Follow us on social media for tips, inspiration, and the latest
              updates from Plant Paradise!
            </p>
            <div className="flex justify-center space-x-4">
              {/* Add social media icons and links here */}
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default About;

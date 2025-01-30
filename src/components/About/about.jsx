import React from "react";
import AboutImg from "../../assets/women/Basket5.jpg"; // Replace with your preferred image
//import { GiHandcrafted } from "react-icons/gi";
import { FaLeaf, FaUsers, FaSmile } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen flex items-center py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div data-aos="fade-right" className="flex justify-center">
            <img
              src={AboutImg}
              alt="About Us"
              className="max-w-[400px] h-[400px] w-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div data-aos="fade-left" className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              About Us
            </h1>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to <span className="font-semibold text-primary">Basket Bliss</span>, your one-stop destination for beautifully crafted, handmade baskets. We are passionate about creating functional and stylish baskets that add a touch of elegance to your everyday life. Our products are made with love, using sustainable materials and traditional craftsmanship.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At Basket Bliss, we believe in the power of simplicity and sustainability. Our mission is to provide you with high-quality, eco-friendly baskets that not only meet your needs but also contribute to a greener planet. Whether you're looking for storage solutions, home décor, or the perfect gift, we’ve got you covered.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
              
                <div>
                  <h3 className="text-lg font-semibold">Handcrafted Excellence</h3>
                  <p className="text-sm text-gray-500">
                    Each basket is carefully handmade by skilled artisans.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaLeaf className="text-4xl text-green-500" />
                <div>
                  <h3 className="text-lg font-semibold">Eco-Friendly Materials</h3>
                  <p className="text-sm text-gray-500">
                    Made from sustainable, natural materials.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaUsers className="text-4xl text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Customer-Centric</h3>
                  <p className="text-sm text-gray-500">
                    We prioritize your satisfaction and happiness.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaSmile className="text-4xl text-yellow-500" />
                <div>
                  <h3 className="text-lg font-semibold">Happiness Guaranteed</h3>
                  <p className="text-sm text-gray-500">
                    Your smile is our ultimate reward.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary/80 transition duration-300">
                Explore Our Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
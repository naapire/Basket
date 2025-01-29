import React from "react";
import BannerImg from "../../assets/women/Basket6.jpg";
import { GrSecure } from "react-icons/gr";
import { IoBagCheck } from "react-icons/io5";
import { GiBasket } from "react-icons/gi";
import { MdDiscount } from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Handmade Baskets Sale - Up to 50% Off!
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Discover our exclusive collection of beautifully crafted handmade baskets. Perfect for storage, decoration, and gifting. Shop now and enjoy amazing discounts!
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Premium Quality Materials</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoBagCheck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Secure Checkout</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiBasket className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Eco-Friendly & Sustainable</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdDiscount className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Exclusive Discounts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
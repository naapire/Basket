import React, { useState } from "react";
import Img1 from "../../assets/women/Basket5.jpg";
import Img2 from "../../assets/women/Basket6.jpg";
import Img3 from "../../assets/women/Basket7.jpg";
import Img4 from "../../assets/women/Basket8.jpg";
import Basket1 from "../../assets/hero/basket4.png";
import Basket3 from "../../assets/hero/Basket3.jpg";
import Basket2 from "../../assets/hero/Basket2.jpg";
import Basket4 from "../../assets/hero/Basket4.jpg";
import Basket4 from "../../assets/hero/Basket4.png";
import { FaStar } from "react-icons/fa6";

// Initial set of baskets
const initialProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Handwoven Storage Basket",
    rating: 5.0,
    color: "Natural Fiber",
    price: "Price: 100 cedis",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Eco-Friendly Market Basket",
    rating: 4.5,
    color: "Recycled Material",
    price: "Price: 100 cedis",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Decorative Woven Basket",
    rating: 4.7,
    color: "Brown Weave",
    price: "Price: 100 cedis",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Picnic Basket with Lid",
    rating: 4.4,
    color: "Straw Weave",
    price: "Price: 100 cedis",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Small Handmade Basket",
    rating: 4.5,
    color: "Multicolor",
    price: "Price: 100 cedis",
    aosDelay: "800",
  },
];

// Additional baskets to load when "View All Baskets" is clicked
const additionalProductsData = [
  {
    id: 6,
    img: Basket1,
    title: "Large Storage Basket",
    rating: 4.8,
    color: "Natural Fiber",
    price: "Price: 120 cedis",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Basket2,
    title: "Round Woven Basket",
    rating: 4.6,
    color: "Brown Weave",
    price: "Price: 90 cedis",
    aosDelay: "200",
  },
  {
    id: 8,
    img: Basket3,
    title: "Elegant Decorative Basket",
    rating: 4.9,
    color: "Straw Weave",
    price: "Price: 110 cedis",
    aosDelay: "400",
  },
  {
    id: 9,
    img: Basket4,
    title: "Traditional Market Basket",
    rating: 4.7,
    color: "Multicolor",
    price: "Price: 95 cedis",
    aosDelay: "600",
  },
];

const Products = () => {
  const [showAll, setShowAll] = useState(false); // State to track if all baskets should be shown
  const [products, setProducts] = useState(initialProductsData); // State to manage the list of products

  // Function to handle "View All Baskets" button click
  const handleViewAll = () => {
    setShowAll(true); // Set showAll to true
    setProducts([...initialProductsData, ...additionalProductsData]); // Combine initial and additional baskets
  };
  const handleShowLess = () => {
    setShowAll(false); // Set showAll to false
    setProducts(initialProductsData); // Reset to initial baskets
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Baskets for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Handcrafted Baskets
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore our collection of beautifully crafted baskets, perfect for
            storage, decoration, and everyday use.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {products.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <p className="font-semibold text-black">{data.price}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View all button */}
          {!showAll && ( // Only show the button if not all baskets are displayed
            <div className="flex justify-center">
              <button
                onClick={handleViewAll}
                className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
              >
                View All Baskets
              </button>
              {showAll && (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowLess}
                    className="text-center mt-10 cursor-pointer bg-gray-500 text-white py-1 px-5 rounded-md"
                  >
                    Show Less
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

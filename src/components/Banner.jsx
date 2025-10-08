import React from "react";
import { Link } from "react-router";
import BannerBg from "../assets/img/banner.png";
import { FaApple } from "react-icons/fa6";

const Banner = () => {
  const categories = [
    { name: "Beauty", path: "/allcategory" },
    { name: "Fragrances", path: "/allcategory" },
    { name: "Groceries", path: "/allcategory" },
    { name: "Womens Bags", path: "/allcategory" },
    { name: "Laptops", path: "/allcategorye" },
    { name: "Mens Shirts", path: "/allcategory" },
    { name: "Mens Shoes", path: "/allcategory" },
    { name: "Smartphones", path: "/allcategory" },
    { name: "Sunglasses", path: "/allcategory" },
    { name: "Skin-Care", path: "/allcategory" },
    
  ];

  return (
    <>
      <section id="banner" className="py-[40px]">
        <div className="container mx-auto">
          <div className="row flex flex-col md:flex-row gap-[20px]">

            {/* ===== Left Sidebar ===== */}
            <div className="md:w-[250px] border-b md:border-b-0 md:border-r border-gray-200 md:pr-5">
              <ul className="space-y-3">
                {categories.map((cat, i) => (
                  <li key={i} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                    <Link className="w-full" to={cat.path}>{cat.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== Banner Content ===== */}
            <div className="flex-1 relative bg-black rounded-[10px] py-[58px] overflow-hidden">
              <img
                src={BannerBg}
                alt="iPhone"
                className="absolute right-0 top-0 h-full object-cover"
              />

              <div className="relative z-10 p-[40px] text-white">
                <p className="text-[18px] opacity-80 mb-2 flex gap-[15px] items-center">
                  <FaApple className="text-[35px]" /> iPhone 14 Series
                </p>

                <h1 className="text-[45px] font-bold leading-snug w-[300px]">
                  Up to <span className="text-yellow-400">10%</span> off Voucher
                </h1>

                <button className="mt-[25px] bg-white text-black px-[25px] py-[10px] rounded-full font-medium hover:bg-yellow-400 transition duration-300">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

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
        <div className="container mx-auto px-3 sm:px-4 md:px-0">
          <div className="row flex flex-col md:flex-row gap-[20px]">

            {/* ===== Left Sidebar ===== */}
            <div className="md:w-[250px] border-b md:border-b-0 md:border-r border-gray-200 md:pr-5">
              <ul className="space-y-2 sm:space-y-3">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md"
                  >
                    <Link className="w-full block" to={cat.path}>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== Banner Content ===== */}
            <div className="flex-1 relative bg-black rounded-[10px] py-[30px] sm:py-[40px] md:py-[58px] overflow-hidden">
              <img
                src={BannerBg}
                alt="iPhone"
                className="absolute right-0 top-0 w-full md:w-auto h-full object-cover opacity-50 md:opacity-100"
              />

              <div className="relative z-10 p-5 sm:p-6 md:p-[40px] text-white text-center md:text-left">
                <p className="text-[16px] sm:text-[18px] opacity-80 mb-2 flex gap-[10px] sm:gap-[15px] items-center justify-center md:justify-start">
                  <FaApple className="text-[28px] sm:text-[35px]" /> iPhone 14 Series
                </p>

                <h1 className="text-[28px] sm:text-[35px] md:text-[45px] font-bold leading-snug w-full md:w-[300px] mx-auto md:mx-0">
                  Up to <span className="text-yellow-400">10%</span> off Voucher
                </h1>

                <button className="mt-5 sm:mt-[25px] bg-white text-black px-5 sm:px-[25px] py-2 sm:py-[10px] rounded-full font-medium hover:bg-yellow-400 transition duration-300">
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

import React from "react";
import { Link } from "react-router";
import BannerBg from "../assets/img/banner.png";
import { FaApple } from "react-icons/fa6";

const Banner = () => {
  const categories = [
    { name: "Woman’s Fashion", path: "/category/womens-fashion" },
    { name: "Men’s Fashion", path: "/category/mens-fashion" },
    { name: "Electronics", path: "/category/electronics" },
    { name: "Home & Lifestyle", path: "/category/home-lifestyle" },
    { name: "Medicine", path: "/category/medicine" },
    { name: "Sports & Outdoor", path: "/category/sports-outdoor" },
    { name: "Baby’s & Toys", path: "/category/baby-toys" },
    { name: "Groceries & Pets", path: "/category/groceries-pets" },
    { name: "Health & Beauty", path: "/category/health-beauty" },
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
                  <li
                    key={i}
                    className="flex items-center justify-between text-[16px] font-medium text-gray-700 hover:text-black cursor-pointer"
                  >
                    <Link to={cat.path}>{cat.name}</Link>
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

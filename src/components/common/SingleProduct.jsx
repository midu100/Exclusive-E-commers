import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";

const SingleProduct = () => {
  return (
    <>
      <div className="relative w-[48%] md:w-[270px] border border-gray-200 rounded-[10px] overflow-hidden hover:shadow-md transition">

            <span className="absolute top-3 left-3 bg-red-500 text-white text-[12px] font-semibold px-[6px] py-[2px] rounded">
               -40%
            </span>

            <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
              <FaRegHeart />
            </button>

            <div className="flex justify-center items-center bg-gray-50 h-[180px]">
                <img
                    src="https://i.ibb.co/xg7f9vL/gamepad.png"
                    alt="Gamepad"
                    className="h-[120px]"
                />
            </div>

            <div className="p-[12px]">
                <h3 className="text-[14px] font-medium text-gray-700 mb-1">
                    HAVIT HV-G92 Gamepad
                </h3>

                <div className="flex items-center gap-[8px] mb-2">
                    <p className="text-red-500 font-semibold text-[16px]">$120</p>
                    <p className="text-gray-400 line-through text-[14px]">$160</p>
                </div>

                <div className="flex items-center text-yellow-500 text-[14px] gap-[4px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-gray-500 ml-1 text-[12px]">(88)</span>
                </div>
            </div>

      </div>
    </>
  );
};

export default SingleProduct;

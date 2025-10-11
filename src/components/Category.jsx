import React from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoWatchOutline } from "react-icons/io5";
import { FiCamera } from "react-icons/fi";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";

const Category = () => {
  return (
    <>
      <section className="py-[60px] bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-[40px] text-center md:text-left">
            <div>
              <p className="text-red-500 font-semibold mb-1 text-[16px] sm:text-[18px]">Categories</p>
              <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold text-gray-900">
                Browse By Category
              </h2>
            </div>

            <div className="flex gap-[10px] mt-4 md:mt-0">
              <button
                className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
              >
                ←
              </button>
              <button
                className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
              >
                →
              </button>
            </div>
          </div>

          {/* Category Boxes */}
          <div
            className="flex flex-wrap justify-center md:justify-between gap-[10px] sm:gap-[15px] md:gap-[25px] text-center"
          >
            {/* Phone */}
            <div
              className="hover:bg-red-500 hover:text-white duration-[.4s] w-[47%] sm:w-[30%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[25px] sm:py-[30px] text-gray-700 hover:border-red-400 transition cursor-pointer"
            >
              <IoPhonePortraitOutline className='text-[40px] sm:text-[50px] md:text-[56px]'/>
              <p className="font-medium mt-2 text-[14px] sm:text-[16px]">Phones</p>
            </div>

            {/* Computer */}
            <div
              className="hover:bg-red-500 hover:text-white duration-[.4s] w-[47%] sm:w-[30%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[25px] sm:py-[30px] text-gray-700 hover:border-red-400 transition cursor-pointer"
            >
              <HiOutlineDesktopComputer className='text-[40px] sm:text-[50px] md:text-[56px]'/>
              <p className="font-medium mt-2 text-[14px] sm:text-[16px]">Computers</p>
            </div>

            {/* SmartWatch */}
            <div
              className="hover:bg-red-500 hover:text-white duration-[.4s] w-[47%] sm:w-[30%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[25px] sm:py-[30px] text-gray-700 hover:border-red-400 transition cursor-pointer"
            >
              <IoWatchOutline className='text-[40px] sm:text-[50px] md:text-[56px]'/>
              <p className="font-medium mt-2 text-[14px] sm:text-[16px]">SmartWatch</p>
            </div>

            {/* Camera (Active) */}
            <div
              className="w-[47%] sm:w-[30%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[25px] sm:py-[30px] text-gray-700 hover:bg-red-500 hover:text-white duration-[.4s] border-red-500 shadow-lg cursor-pointer"
            >
              <FiCamera className='text-[40px] sm:text-[50px] md:text-[56px]'/>
              <p className="font-medium mt-2 text-[14px] sm:text-[16px]">Camera</p>
            </div>

            {/* HeadPhones */}
            <div
              className="hover:bg-red-500 hover:text-white duration-[.4s] w-[47%] sm:w-[30%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[25px] sm:py-[30px] text-gray-700 hover:border-red-400 transition cursor-pointer"
            >
              <CiHeadphones className='text-[40px] sm:text-[50px] md:text-[56px]'/>
              <p className="font-medium mt-2 text-[14px] sm:text-[16px]">HeadPhones</p>
            </div>

            {/* Gaming */}
            <div
              className="hover:bg-red-500 hover:text-white duration-[.4s] w-[47%] sm:w-[30%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[25px] sm:py-[30px] text-gray-700 hover:border-red-400 transition cursor-pointer"
            >
              <IoGameControllerOutline className='text-[40px] sm:text-[50px] md:text-[56px]'/>
              <p className="font-medium mt-2 text-[14px] sm:text-[16px]">Gaming</p>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="w-full border-t border-gray-200 mt-[30px]"></div>
        </div>
      </section>
    </>
  )
}

export default Category

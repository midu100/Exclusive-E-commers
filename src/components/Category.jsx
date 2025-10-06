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
          <div className="flex flex-col md:flex-row justify-between items-center mb-[40px]">
            <div>
              <p className="text-red-500 font-semibold mb-1">Categories</p>
              <h2 className="text-[28px] md:text-[34px] font-bold text-gray-900">
                Browse By Category
              </h2>
            </div>

            <div className="flex gap-[10px] mt-4 md:mt-0">
              <button
                className="w-[40px] h-[40px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
              >
                ←
              </button>
              <button
                className="w-[40px] h-[40px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
              >
                →
              </button>
            </div>
          </div>

          {/* Category Boxes */}
          <div
            className="flex flex-wrap justify-between gap-[20px] md:gap-[25px] text-center"
          >
            {/* Phone */}
            <div
              className="hover:bg-red-500 hover:text-white duration-[.4s] w-[48%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[30px] text-gray-700 hover:border-red-400 transition cursor-pointer"
            >
              <IoPhonePortraitOutline className='text-[56px]'/>

              <p className="font-medium">Phones</p>
            </div>

            {/* Computer */}
            <div
              className="hover:bg-red-500 hover:text-white duration-[.4s] w-[48%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[30px] text-gray-700 hover:border-red-400 transition cursor-pointer"
            >
              <HiOutlineDesktopComputer className='text-[56px]'/>
              <p className="font-medium">Computers</p>
            </div>

            {/* SmartWatch */}
            <div
              className="hover:bg-red-500 hover:text-white duration-[.4s] w-[48%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[30px] text-gray-700 hover:border-red-400 transition cursor-pointer"
            >
              <IoWatchOutline className='text-[56px]'/>
              <p className="font-medium">SmartWatch</p>
            </div>

            {/* Camera (Active) */}
            <div
              className="w-[48%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[30px] text-gray-700 hover:bg-red-500 hover:text-white duration-[.4s] border-red-500 shadow-lg cursor-pointer"
            >
              <FiCamera className='text-[56px]'/>
              <p className="font-medium">Camera</p>
            </div>

            {/* HeadPhones */}
            <div
              className="hover:bg-red-500 hover:text-white duration-[.4s] w-[48%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[30px] text-gray-700 hover:border-red-400 transition cursor-pointer"
            >
              <CiHeadphones className='text-[56px]'/>
              <p className="font-medium">HeadPhones</p>
            </div>

            {/* Gaming */}
            <div
              className="hover:bg-red-500 hover:text-white duration-[.4s] w-[48%] md:w-[15%] flex flex-col items-center justify-center border rounded-[8px] py-[30px] text-gray-700 hover:border-red-400 transition cursor-pointer"
            >
              <IoGameControllerOutline className='text-[56px]'/>
              <p className="font-medium">Gaming</p>
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

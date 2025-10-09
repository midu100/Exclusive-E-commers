import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart, FaStar } from "react-icons/fa";

const SingleProduct = ({Img,Title,price,discountPrice,rating,showDetails,cartClick}) => {
  return (
    <>


    <section className="relative w-[48%] md:w-[270px] border border-gray-200 rounded-[10px] overflow-hidden hover:shadow-md transition">

        <button onClick={cartClick} className="absolute right-[10px] top-3 w-[40px] h-[40px] rounded-full bg-red-500 flex justify-center items-center text-[#fff] hover:bg-orange-500 duration-[.4s] cursor-pointer">
              <BsCart3 className="text-[22px]"/>
        </button>

        <button className="absolute right-[60px] top-3 w-[40px] h-[40px] rounded-full bg-red-500 flex justify-center items-center text-[#fff] hover:bg-orange-500 duration-[.4s] cursor-pointer">
                <FaRegHeart />
         </button>


        <div onClick={showDetails} className="cursor-pointer">

              <span className="absolute top-3 left-3 bg-red-500 text-white text-[12px] font-semibold px-[6px] py-[2px] rounded">
                -40%
              </span>

              <div className="flex justify-center items-center bg-gray-50 h-[180px] overflow-hidden">
                  <img
                      src={Img}
                      alt="Gamepad"
                      className="h-[120px] hover:scale-[1.50] duration-[.4s]"
                  />
              </div>

              <div className="p-[12px]">
                  <h3 className="text-[14px] font-medium text-gray-700 mb-1 truncate w-[200px]">
                      {Title}
                  </h3>

                  <div className="flex items-center gap-[8px] mb-2">
                      <p className="text-red-500 font-semibold text-[16px]">$ {price}</p>
                      <p className="text-gray-400 line-through text-[14px]">$ {discountPrice}</p>
                  </div>

                  <div className="flex items-center text-yellow-500 text-[14px] gap-[4px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <span className="text-gray-500 ml-1 text-[12px]">({rating})</span>
                  </div>
              </div>

        </div>
    </section>


    </>
  );
};

export default SingleProduct;

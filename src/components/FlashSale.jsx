import React from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import SingleProduct from "./common/SingleProduct";
import CommonHead from "./common/CommonHead";

const FlashSale = () => {
  return (
    <section className="py-[60px] bg-white ">
      <div className="container mx-auto px-4">
        <div className="row flex flex-col gap-[30px]">
          
          {/* ===== Header Part ===== */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <CommonHead status={'Today’s'} Name={'Flash Sales'}/>

            {/* ===== Timer ===== */}
            <div className="flex gap-[15px] mt-4 md:mt-0">
              <div className="text-center bg-gray-100 rounded-[8px] px-[10px] py-[5px] w-[60px]">
                <p className="text-[22px] font-bold text-red-500">03</p>
                <p className="text-[12px] text-gray-500 capitalize">Days</p>
              </div>
              <div className="text-center bg-gray-100 rounded-[8px] px-[10px] py-[5px] w-[60px]">
                <p className="text-[22px] font-bold text-red-500">23</p>
                <p className="text-[12px] text-gray-500 capitalize">Hours</p>
              </div>
              <div className="text-center bg-gray-100 rounded-[8px] px-[10px] py-[5px] w-[60px]">
                <p className="text-[22px] font-bold text-red-500">19</p>
                <p className="text-[12px] text-gray-500 capitalize">Minutes</p>
              </div>
              <div className="text-center bg-gray-100 rounded-[8px] px-[10px] py-[5px] w-[60px]">
                <p className="text-[22px] font-bold text-red-500">56</p>
                <p className="text-[12px] text-gray-500 capitalize">Seconds</p>
              </div>
            </div>
          </div>

          {/* ===== Products Section ===== */}
          <div className="flex flex-wrap justify-between gap-[20px]">
            
            {/* Product  */}
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
           
          </div>

          {/* ===== View All Button ===== */}
          <div className="text-center mt-[30px]">
            <Link
              to="/products"
              className="bg-red-500 hover:bg-red-600 text-white px-[30px] py-[12px] rounded-[6px] font-medium transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;

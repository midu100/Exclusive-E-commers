import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import details1 from '../assets/img/details1.png'
import details2 from '../assets/img/details2.png'
import details3 from '../assets/img/details3.png'
import details4 from '../assets/img/details4.png'
import SliderImg from "../components/common/SliderImg";
import BreadCrumb from "../components/common/BreadCrumb";
import axios from "axios";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Slice";

const ProductDetails = () => {

    // const[product,setProduct] = useState([])
    //   console.log(product)
    //   const param = useParams()

      const dispatch = useDispatch()
      const count = useSelector((state)=>state.redu.value)
      
    
    //  useEffect(()=>{
    //    axios.get(`https://dummyjson.com/products/category/furniture`)
    //   .then(res=>{
    //     setProduct(res.data.products)
    //   })
    //   .catch(err=>{
    //     console.log(err)
    //   })
    //  },[])

    const sendedData = useLocation()
    const locationData = sendedData.state
    console.log(locationData)

    const handleAdd = ()=>{
        dispatch(increment())
    }

     const handleSub = ()=>{
        dispatch(decrement())
    }
    

  return (
    <section className="pt-[60px] pb-[140px] bg-white">
      <div className="container mx-auto px-4">
        <BreadCrumb breadLink={'/productdetails'} breadName={'Product Details'} />
        <div className="row flex flex-col lg:flex-row gap-[40px]">

          {/* ===== Left Image Section ===== */}
          <div className="flex flex-col lg:flex-row gap-[20px] flex-1 justify-center">

            <SliderImg proSubImg={locationData?.images[1]} />
            
          </div>

          {/* ===== Right Product Info Section ===== */}
          <div className="flex flex-col gap-5 flex-1">

            {/* Product Title */}
            <h2 className="text-[26px] font-semibold text-gray-800">
              {locationData?.title}
            </h2>

            {/* Ratings & Stock */}
            <div className="flex items-center gap-2 text-[14px] text-gray-500">
              ⭐⭐⭐⭐⭐ <span>({locationData.reviews.length} Reviews)</span>
              <span className="ml-3 text-green-600 font-medium">{locationData.availabilityStatus}</span>
            </div>

            {/* Price */}
            <p className="text-[22px] font-semibold text-gray-800">${locationData?.price}</p>

            {/* Description */}
            <p className="text-[15px] text-gray-500 leading-6">
              {locationData?.description}
            </p>

            <hr className="my-2 border-gray-300" />

            {/* Sizes */}
                <div>
                   <h4 className="text-[16px] font-medium mb-2">Size:</h4>
                    <div className="flex gap-3 flex-wrap">
                        <button className="w-[40px] h-[40px] border rounded-md hover:bg-red-500 hover:text-white duration-[.4s] border-red-500 text-gray-700 hover:bg-gray-100">
                        XS
                        </button>
                        <button className="w-[40px] h-[40px] border rounded-md hover:bg-red-500 hover:text-white duration-[.4s] border-red-500 text-gray-700 hover:bg-gray-100">
                        S
                        </button>
                        <button className="w-[40px] h-[40px] border rounded-md hover:bg-red-500 hover:text-white duration-[.4s] border-red-500">
                        M
                        </button>
                        <button className="w-[40px] h-[40px] border rounded-md hover:bg-red-500 hover:text-white duration-[.4s] border-red-500 text-gray-700 hover:bg-gray-100">
                        L
                        </button>
                        <button className="w-[40px] h-[40px] border rounded-md hover:bg-red-500 hover:text-white duration-[.4s] border-red-500 text-gray-700 hover:bg-gray-100">
                        XL
                        </button>
                    </div>
                </div>


            {/* Quantity, Buy, Wishlist */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center border border-gray-400 rounded-md">
                <button onClick={handleSub} className="p-2 text-gray-600 hover:bg-red-500 hover:text-white duration-[.4s]">
                  <AiOutlineMinus />
                </button>
                <span className="px-4 text-gray-700 font-medium">{count}</span>
                <button onClick={handleAdd} className="p-2 text-gray-600 hover:bg-red-500 hover:text-white duration-[.4s]">
                  <AiOutlinePlus />
                </button>
              </div>

              <button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition">
                Buy Now
              </button>

              <button className="border border-gray-400 rounded-md p-2 cursor-pointer hover:bg-gray-100">
                <FaHeart className="text-gray-600" />
              </button>
            </div>

            {/* Delivery Information */}
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex justify-between items-center border border-gray-300 rounded-md px-4 py-3">
                <div>
                  <h5 className="font-medium text-[15px]">Free Delivery</h5>
                  <p className="text-[13px] text-gray-500">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center border border-gray-300 rounded-md px-4 py-3">
                <div>
                  <h5 className="font-medium text-[15px]">Return Delivery</h5>
                  <p className="text-[13px] text-gray-500">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline cursor-pointer">Details</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

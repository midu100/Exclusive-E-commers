import React, { useEffect, useState } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import SingleProduct from "./common/SingleProduct";
import CommonHead from "./common/CommonHead";
import axios from "axios";

const FlashSale = () => {

  const[product,setProduct] = useState([])
  console.log(product)
  const navigate = useNavigate()
  const [cate , setCate ] = useState('furniture')
  const[showBtn,setShowBtn] = useState(false)

 useEffect(()=>{
   axios.get(`https://dummyjson.com/products/category/${cate}`)
  .then(res=>{
    setProduct(res.data.products)
  })
  .catch(err=>{
    console.log(err)
  })
 },[cate])

// -------------- Navigating 

  const handleNav = (e)=>{
    console.log(e)
    navigate('/productdetails' , { state: e })
  }

  console.log(product)

  const [timeleft,setTimeleft] = useState(
    {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  )
  console.log(timeleft.seconds)

  const endTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000
  useEffect(()=>{
    console.log(endTime)

    const interval = setInterval(() => {

      const now = new Date().getTime()
      const distance = endTime - now

      if(distance <=0 ){
          clearInterval(interval)
          setTimeleft({
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0
            })
        }

        else{
          const days = Math.floor(distance / (1000*60*60*24))
          const hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60))
          const minutes = Math.floor(distance % (1000*60*60) / (1000*60))
          const seconds  = Math.floor(distance % (1000*60) / 1000)

          setTimeleft({days,hours,minutes,seconds})
        }

    }, 1000);

    return () => clearInterval(interval);

  },[])

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
                <p className="text-[22px] font-bold text-red-500">{timeleft.days}</p>
                <p className="text-[12px] text-gray-500 capitalize">Days</p>
              </div>
              <div className="text-center bg-gray-100 rounded-[8px] px-[10px] py-[5px] w-[60px]">
                <p className="text-[22px] font-bold text-red-500">{timeleft.hours}</p>
                <p className="text-[12px] text-gray-500 capitalize">Hours</p>
              </div>
              <div className="text-center bg-gray-100 rounded-[8px] px-[10px] py-[5px] w-[60px]">
                <p className="text-[22px] font-bold text-red-500">{timeleft.minutes}</p>
                <p className="text-[12px] text-gray-500 capitalize">Minutes</p>
              </div>
              <div className="text-center bg-gray-100 rounded-[8px] px-[10px] py-[5px] w-[60px]">
                <p className="text-[22px] font-bold text-red-500">{timeleft.seconds}</p>
                <p className="text-[12px] text-gray-500 capitalize">Seconds</p>
              </div>
            </div>
          </div>

          {/* ===== Products Section ===== */}
          <div className="flex flex-wrap justify-between gap-[20px]">

            {
              product.map((item,i)=>(
                <SingleProduct key={i} showDetails={()=>handleNav(item)} Img={item?.images[0]} Title={item.title} price={item.price} rating={item.rating}/>
              ))
            }
           
          </div>

          {/* ===== View All Button ===== */}
          <div className="text-center mt-[30px]">
            {
              showBtn ?
              <button onClick={()=>{setCate('furniture'),setShowBtn(!showBtn)}} className="bg-red-500 hover:bg-red-600 text-white px-[30px] py-[12px] rounded-[6px] font-medium transition">
                 Previous Products
              </button>

              :


            <button onClick={()=>{setCate('womens-dresses'),setShowBtn(!showBtn)}} className="bg-red-500 hover:bg-red-600 text-white px-[30px] py-[12px] rounded-[6px] font-medium transition">
              View All Products
            </button>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;

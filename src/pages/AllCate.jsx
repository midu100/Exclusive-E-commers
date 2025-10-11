import React, { useState, useEffect } from 'react'
import SingleProduct from '../components/common/SingleProduct'
import axios from 'axios';
import { useNavigate } from 'react-router';
import BreadCrumb from '../components/common/BreadCrumb';
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const AllCate = () => {

  const [product, setProduct] = useState([]);
  const [cate, setCate] = useState('furniture');
  const navigate = useNavigate()
  const [title,setTitle] = useState('Furniture')
  const [mobileMenu,setMobileMenu] = useState(false)

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${cate}`)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cate]);

  const handleCateProduct = (CateApi)=>{
    setTitle(CateApi)
     setCate(CateApi)
     setMobileMenu(false) // close mobile menu after click
  }

  const handleDetail =(e)=>{
    navigate('/productdetails' , {state : e})
  }

  return (
    <section className="py-[50px] bg-gray-50">
      <div className="container mx-auto px-4">
        <BreadCrumb breadLink={'/allcategory'} breadName={'Our Product'} />

        {/* ===== Page Header ===== */}
        <div className="text-center mb-[40px] md:mb-[60px]">
          <h2 className="text-[28px] md:text-[32px] font-bold text-gray-800 uppercase tracking-wide">
            {title} Collection
          </h2>
          <p className="text-gray-500 text-[15px] mt-2 md:mt-3">
            Browse our handpicked premium furniture items designed for comfort and style.
          </p>
          <div className="mt-4 w-[120px] h-[3px] bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* ===== Main Content ===== */}
        <div className="flex flex-col md:flex-row gap-6 relative">

          {/* ===== Mobile Hamburger ===== */}
          <div className="md:hidden mb-4">
            <button
              onClick={()=>setMobileMenu(true)}
              className="text-3xl p-2 text-gray-700 hover:text-red-500 transition"
            >
              <HiOutlineMenu />
            </button>
          </div>

          {/* ===== Left Sidebar (Buttons untouched) ===== */}
          <div className={`
            fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg p-6 border border-gray-100
            transform ${mobileMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out
            md:relative md:translate-x-0 md:w-[260px]
          `}>
            {/* Close button for mobile */}
            <div className="flex justify-end md:hidden mb-6">
              <button onClick={()=>setMobileMenu(false)} className="text-2xl text-gray-700 hover:text-red-500">
                <IoClose />
              </button>
            </div>

            {/* ===== Category Buttons (EXACTLY AS YOU HAD) ===== */}
            <h3 className="text-[18px] font-semibold text-gray-800 mb-4">Categories</h3>
            <div className="flex flex-col gap-3">
              <button onClick={()=>{handleCateProduct('beauty')}} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                Beauty
              </button>
              <button onClick={()=>{handleCateProduct('fragrances')}} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                Fragrances
              </button>
              <button onClick={()=>{handleCateProduct('groceries')}} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                Groceries
              </button>
              <button onClick={()=>{handleCateProduct('womens-bags')}} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                Womens Bags
              </button>
              <button onClick={()=>{handleCateProduct('laptops')}} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                Laptops
              </button>
              <button onClick={()=>{handleCateProduct('mens-shirts')}} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                Mens Shirts
              </button>
              <button onClick={()=>{handleCateProduct('mens-shoes')}} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                Mens Shoes
              </button>
              <button onClick={()=>{handleCateProduct('smartphones')}} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                Smartphones
              </button>
              <button onClick={()=>{handleCateProduct('sunglasses')}} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                Sunglasses
              </button>
              <button onClick={()=>{handleCateProduct('skin-care')}} className="w-full text-left bg-gray-100 hover:bg-red-500 hover:text-white transition-all duration-300 text-[15px] font-medium text-gray-700 px-4 py-2 rounded-md">
                Skin Care
              </button>
            </div>
          </div>

          {/* ===== Overlay for Mobile ===== */}
          {mobileMenu && (
            <div
              onClick={()=>setMobileMenu(false)}
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
            ></div>
          )}

          {/* ===== Right Side (Products) ===== */}
          <div className="flex-1 flex flex-wrap justify-start gap-[10px] mt-6 md:mt-0">
            {product.map((item,i)=>(
              <SingleProduct
                showDetails={()=>handleDetail(item)}
                key={i}
                Img={item?.images[0]}
                Title={item?.title}
                price={item?.price}
                rating={item?.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllCate

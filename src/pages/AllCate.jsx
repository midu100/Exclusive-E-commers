import React, { useEffect, useState } from 'react'
import SingleProduct from '../components/common/SingleProduct'
import axios from 'axios';
import { useNavigate } from 'react-router';
import BreadCrumb from '../components/common/BreadCrumb';

const AllCate = () => {

  const [product, setProduct] = useState([]);
  const [cate, setCate] = useState('furniture');
  const navigate = useNavigate()
  const [title,setTitle] = useState('Furniture')
  console.log(title)

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
  }

  const handleDetail =(e)=>{
    navigate('/productdetails' , {state : e})
  }

  return (
    <>
      <section className="py-[50px] bg-gray-50">
        <div className="container mx-auto px-4">
            <BreadCrumb breadLink={'/allcategory'} breadName={'Our Product'} />
          {/* ===== Page Header ===== */}
          <div className="text-center mb-[60px]">
            <h2 className="text-[32px] font-bold text-gray-800 uppercase tracking-wide">
              {title} Collection
            </h2>
            <p className="text-gray-500 text-[15px] mt-2">
              Browse our handpicked premium furniture items designed for comfort and style.
            </p>
            <div className="mt-4 w-[120px] h-[3px] bg-red-500 mx-auto rounded-full"></div>
          </div>

          {/* ===== Main Content (Categories + Products) ===== */}
          <div className="row flex flex-row justify-between gap-[40px]">

            {/* ===== Left Sidebar (Static Buttons) ===== */}
            <div className="w-full md:w-[260px] bg-white shadow-md rounded-2xl p-6 border border-gray-100 self-start">
              <h3 className="text-[18px] font-semibold text-gray-800 mb-4">
                Categories
              </h3>

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

            {/* ===== Right Side (Products) ===== */}
            <div className="flex flex-wrap justify-start gap-[25px] h-fit w-[78%]">
              {product.map((item, i) => (
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
    </>
  );
};

export default AllCate;

import React, { useEffect, useState } from 'react'
import CommonHead from './common/CommonHead'
import SingleProduct from './common/SingleProduct'
import { Link } from 'react-router'
import axios from 'axios'

const ExploreProduct = () => {

  const[product,setProduct] = useState([])
  console.log(product)

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/womens-bags`)
    .then((res)=>{
      setProduct(res.data.products)
     
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
      <section className='pb-[140px]'>
         <div className="container">
            <CommonHead status={'Our Products'} Name={'Explore Our Products'} />
            <div className="row flex flex-wrap justify-between gap-[40px] mt-[60px]">
              {
                product.map((item,i)=>(
                  <SingleProduct Img={item?.images[0]} Title={item?.title} price={item?.price} rating={item?.rating} />
                ))
              }
            </div>

             {/* ===== View All Button ===== */}
            <div className="text-center mt-[60px]">
                <Link to="/allCategory" className="bg-red-500 hover:bg-red-600 text-white px-[30px] py-[12px] rounded-[6px] font-medium transition">
                   View All Products
                </Link>
            </div>

         </div>
      </section>
    </>
  )
}

export default ExploreProduct
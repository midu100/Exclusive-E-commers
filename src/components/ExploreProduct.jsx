import React from 'react'
import CommonHead from './common/CommonHead'
import SingleProduct from './common/SingleProduct'
import { Link } from 'react-router'

const ExploreProduct = () => {
  return (
    <>
      <section className='pb-[140px]'>
         <div className="container">
            <CommonHead status={'Our Products'} Name={'Explore Our Products'} />
            <div className="row flex flex-wrap justify-between gap-[40px] mt-[60px]">
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </div>

             {/* ===== View All Button ===== */}
            <div className="text-center mt-[60px]">
                <Link to="/products" className="bg-red-500 hover:bg-red-600 text-white px-[30px] py-[12px] rounded-[6px] font-medium transition">
                   View All Products
                </Link>
            </div>

         </div>
      </section>
    </>
  )
}

export default ExploreProduct
import React, { useEffect, useState } from 'react'
import CommonHead from './common/CommonHead'
import SingleProduct from './common/SingleProduct'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { Slide, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

const ExploreProduct = () => {

  const[product,setProduct] = useState([])
  const navigate = useNavigate()
  console.log(product)
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/womens-bags`)
    .then((res)=>{
      setProduct(res.data.products)
     
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


   const handleDetail = (e) =>{
    console.log(e)
    navigate('/productdetails' , {state : e})
   }

  //  ==================== Cart =====================
  const handleCart = (e)=>{
      const existId = JSON.parse(localStorage.getItem('Cart')) || []
       existId.push(e)
       localStorage.setItem('Cart',JSON.stringify(existId))
       console.log(existId)
       dispatch(addTocart(existId))
  
       toast.success('Product Added', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
          });
     }

  return (
    <>
      <section className='pb-[80px] sm:pb-[100px] md:pb-[140px]'>
         <div className="container mx-auto px-4">
            {/* ===== Section Header ===== */}
            <CommonHead status={'Our Products'} Name={'Explore Our Products'} />

            {/* ===== Products Grid ===== */}
            <div className="row flex flex-wrap justify-center md:justify-between gap-[15px] sm:gap-[25px] lg:gap-[30px] mt-[40px] sm:mt-[50px] md:mt-[60px]">
              {
                product.map((item,i)=>(
                  <SingleProduct
                  key={i}
                  cartClick={()=>handleCart(item)}
                  showDetails={()=>handleDetail(item)}
                    Img={item?.images[0]}
                    Title={item?.title}
                    price={item?.price}
                    rating={item?.rating}
                  />
                ))
              }
            </div>

            {/* ===== View All Button ===== */}
            <div className="text-center mt-[40px] sm:mt-[50px] md:mt-[60px]">
                <Link
                  to="/allCategory"
                  className="bg-red-500 hover:bg-red-600 text-white px-[25px] sm:px-[30px] py-[10px] sm:py-[12px] rounded-[6px] font-medium transition"
                >
                   View All Products
                </Link>
            </div>

         </div>
      </section>
    </>
  )
}

export default ExploreProduct
import React, { useEffect, useState } from 'react'
import CommonHead from './common/CommonHead'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleProduct from './common/SingleProduct';
import Slider from 'react-slick';
import axios from 'axios';
import { useNavigate } from 'react-router';

const BestSelling = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  const [product,setProduct] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/category/motorcycle`)
    .then((res)=>{
        setProduct(res.data.products)
    })
    .catch((err)=>{
        console.log(err)
    })
  },[])

//   Details
const handleDetail =(e)=>{
    navigate('/productdetails' , {state : e})
}

  return (
    <div>
        <section className='pb-[140px]'>
            <div className="container">
                <CommonHead status={'This Month'} Name={'Best Selling Products'}/>
                <div className="row mt-[60px]">

                    <Slider {...settings}>
                        {
                            product.map((item,i)=>(
                                <div key={i}>
                                  <SingleProduct showDetails={()=>handleDetail(item)} Img={item.images[2]} Title={item.title} price={item.price} rating={item.rating}/>
                                </div>
                            ))
                        }
                        

                    </Slider>

                </div>
            </div>
        </section>
    </div>
  )
}

export default BestSelling
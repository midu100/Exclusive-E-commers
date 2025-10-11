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
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    // ✅ Responsive breakpoints
    responsive: [
      {
        breakpoint: 1280, // large screen (laptop)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // medium screen (tablet)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // small screen (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/motorcycle`)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Details
  const handleDetail = (e) => {
    navigate('/productdetails', { state: e });
  };

  return (
    <div>
      <section className="pb-[100px] sm:pb-[120px] md:pb-[140px]">
        <div className="container w-full mx-auto px-3 sm:px-6">
          {/* Header */}
          <CommonHead status={'This Month'} Name={'Best Selling Products'} />

          {/* Product Slider */}
          <div className="row mt-[30px] sm:mt-[40px] md:mt-[60px]">
            <Slider {...settings}>
              {product.map((item, i) => (
                <div
                  key={i}
                  className="px-2 sm:px-3 md:px-4"  // ✅ proper spacing between cards
                >
                  <SingleProduct
                    showDetails={() => handleDetail(item)}
                    Img={item.images[2]}
                    Title={item.title}
                    price={item.price}
                    rating={item.rating}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSelling;

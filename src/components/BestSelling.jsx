import React from 'react'
import CommonHead from './common/CommonHead'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleProduct from './common/SingleProduct';
import Slider from 'react-slick';

const BestSelling = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  return (
    <div>
        <section className='pb-[140px]'>
            <div className="container">
                <CommonHead status={'This Month'} Name={'Best Selling Products'}/>
                <div className="row mt-[60px]">

                    <Slider {...settings}>
                        <div>
                            <SingleProduct />
                        </div>

                        <div>
                            <SingleProduct />
                        </div>

                        <div>
                            <SingleProduct />
                        </div>

                        <div>
                            <SingleProduct />
                        </div>

                        <div>
                            <SingleProduct />
                        </div>
                    </Slider>

                </div>
            </div>
        </section>
    </div>
  )
}

export default BestSelling
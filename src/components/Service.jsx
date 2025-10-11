import React from 'react'
import SingleService from './common/SingleService'
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiAdguard } from "react-icons/si";

const Service = () => {
  return (
    <>
      <section className='pb-[60px] sm:pb-[80px] md:pb-[140px]'>
        <div className="container mx-auto px-4">
            <div className="row flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-around gap-[20px] sm:gap-[30px] md:gap-[40px]">
                <SingleService 
                  logo={<TbTruckDelivery className='text-[32px] sm:text-[36px] md:text-[40px]' />} 
                  service={'FREE AND FAST DELIVERY'} 
                  details={'Free delivery for all orders over $140'}
                />
                <SingleService 
                  logo={<TfiHeadphoneAlt className='text-[32px] sm:text-[36px] md:text-[40px]' />} 
                  service={'24/7 CUSTOMER SERVICE'} 
                  details={'Friendly 24/7 customer support'}
                />
                <SingleService 
                  logo={<SiAdguard className='text-[32px] sm:text-[36px] md:text-[40px]' />} 
                  service={'MONEY BACK GUARANTEE'} 
                  details={'We return money within 30 days'}
                />
            </div>
        </div>
      </section>
    </>
  )
}

export default Service

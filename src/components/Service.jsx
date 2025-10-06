import React from 'react'
import SingleService from './common/SingleService'
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiAdguard } from "react-icons/si";



const Service = () => {
  return (
    <>
      <section className='pb-[140px]'>
        <div className="container">
            <div className="row flex justify-around">
                <SingleService logo={<TbTruckDelivery/>} service={'FREE AND FAST DELIVERY'} details={'Free delivery for all orders over $140'}/>
                <SingleService logo={<TfiHeadphoneAlt/>} service={'24/7 CUSTOMER SERVICE'} details={'Friendly 24/7 customer support'}/>
                <SingleService logo={<SiAdguard/>} service={'MONEY BACK GUARANTEE'} details={'We reurn money within 30 days'}/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Service
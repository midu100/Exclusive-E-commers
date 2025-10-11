import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
      <header className='bg-[#000] py-[12px] sm:py-[14px] md:py-[15px]'>
         <div className="container mx-auto px-3 sm:px-4 md:px-6">
            <div className="row">
                <p className='flex flex-wrap items-center justify-center gap-[4px] sm:gap-[6px] text-[12px] sm:text-[13px] md:text-[14px] font-normal text-[#fff] text-center leading-[1.6]'>
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                  <Link 
                    to={'/'} 
                    className='font-medium underline underline-offset-2 hover:text-[#ffcc00] transition-colors duration-300'
                  >
                    Shop Now
                  </Link>
                </p>
            </div>
         </div>
      </header>
    </>
  )
}

export default Header

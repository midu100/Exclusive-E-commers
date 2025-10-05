import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
      <header className='bg-[#000] py-[15px]'>
         <div className="container">
            <div className="row">
                <p className='flex gap-[5px] justify-center text-[14px] font-normal text-[#fff]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<Link to={'/'} className='font-medium underline'>Shop Now</Link></p>
            </div>
         </div>
      </header>
    </>
  )
}

export default Header
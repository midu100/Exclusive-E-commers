import React from 'react'
import { Link } from 'react-router'
import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";



const Navbar = () => {

  const navItem = [
    {
      Name : 'Home',
      path : '/'
    },
    {
      Name : 'Contact',
      path : '/'
    },
    {
      Name : 'About',
      path : '/'
    },
    {
      Name : 'Sign Up',
      path : '/'
    },
  ]

  return (
    <>

      <nav className='py-[40px] border-b border-[#e4dfdf]'>
        <div className="container">
          <div className="row flex justify-between items-center">

            <div className="logo">
              <h1 className='text-[24px] font-bold'>Exclusive</h1>
            </div>

            <ul className='flex gap-[48px] text-[16px] font-medium'>
              {
                navItem.map((item,i)=>(
                  <li key={i}><Link to={item.path}>{item.Name}</Link></li>
                ))
              }
            </ul>

            <div className='flex gap-[24px]'>
                <div className="srcBar w-[243px] h-[38px] bg-[#F5F5F5] rounded-[8px] px-[12px] flex items-center justify-between ">
                  <input type='text' className='text-[14px] w-[80%] border-0 outline-0' placeholder='What are you looking for?' />
                  <FiSearch />
                </div>

                <div className='flex gap-[16px]'>
                  <button><IoIosHeartEmpty className='text-[32px]'/></button>

                  <button className='relative'>
                    <IoCartOutline className='text-[32px]'/>

                    <span className='w-[20px] h-[20px] bg-orange-500 rounded-full text-[#fff] font-semibold text-[16px] absolute top-[-2px] right-[-5px] flex justify-center items-center'>0</span>
                    
                  </button>
                </div>


            </div>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
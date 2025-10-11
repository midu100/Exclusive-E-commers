import React, { useState } from 'react'
import { Link } from 'react-router'
import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = [
    { Name: 'Home', path: '/' },
    { Name: 'Contact', path: '/' },
    { Name: 'About', path: '/' },
    { Name: 'Sign Up', path: '/' },
  ];

  const reduxCart = useSelector(state => state.redu.cartValue);

  return (
    <>
      <nav className='py-[25px] md:py-[40px] border-b border-[#e4dfdf]'>
        <div className="container mx-auto px-4">
          <div className="row flex justify-between items-center">

            {/* ---------- Logo ---------- */}
            <div className="logo">
              <h1 className='text-[22px] md:text-[24px] font-bold'>Exclusive</h1>
            </div>

            {/* ---------- Desktop Menu ---------- */}
            <ul className='hidden md:flex gap-[30px] lg:gap-[48px] text-[15px] lg:text-[16px] font-medium'>
              {navItem.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className='hover:text-orange-500 transition-colors duration-300'>
                    {item.Name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ---------- Right Side ---------- */}
            <div className='flex items-center gap-[14px] lg:gap-[24px]'>

              {/* Search Bar (hide on mobile) */}
              <div className="srcBar hidden sm:flex w-[180px] md:w-[220px] lg:w-[243px] h-[38px] bg-[#F5F5F5] rounded-[8px] px-[12px] items-center justify-between">
                <input
                  type='text'
                  className='text-[13px] md:text-[14px] w-[80%] border-0 outline-0 bg-transparent'
                  placeholder='Search...'
                />
                <FiSearch className='text-[18px]' />
              </div>

              <div className='flex items-center gap-[14px] lg:gap-[16px]'>
                <button><IoIosHeartEmpty className='text-[26px] md:text-[30px] lg:text-[32px]' /></button>

                <Link to={'/cart'} className='relative'>
                  <IoCartOutline className='text-[26px] md:text-[30px] lg:text-[32px]' />
                  <span className='w-[18px] h-[18px] bg-orange-500 rounded-full text-[#fff] font-semibold text-[11px] md:text-[13px] absolute top-[-5px] right-[-6px] flex justify-center items-center'>
                    {reduxCart ? reduxCart.length : 0}
                  </span>
                </Link>

                {/* Hamburger Menu (only on mobile) */}
                <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-[28px] ml-[5px]'>
                  {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
                </button>
              </div>
            </div>
          </div>

          {/* ---------- Mobile Dropdown Menu ---------- */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              menuOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className='flex flex-col gap-3 text-[15px] font-medium bg-[#f8f8f8] rounded-[8px] p-4 shadow-md'>
              {navItem.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className='block py-2 text-center hover:text-orange-500 transition-colors duration-300'
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

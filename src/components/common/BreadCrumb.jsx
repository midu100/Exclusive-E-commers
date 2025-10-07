import React from 'react'
import { Link } from 'react-router'
import { MdArrowRight } from "react-icons/md";

const BreadCrumb = ({breadLink,breadName}) => {
  return (
    <>

        <div className='flex gap-[10px] items-center mb-[20px] bg-red-500 rounded-[4px] p-[15px]'>
            <Link to={'/'} className='text-white font-medium' >Home</Link>
            <MdArrowRight className='text-white text-[18px]' />
            <Link to={breadLink} className='text-white font-medium' >{breadName}</Link>
        </div>

    </>
  )
}

export default BreadCrumb
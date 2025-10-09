'use client'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router'
import SignupImg from '../assets/img/qr.png' // ← replace with your image path

const Signup = () => {
  return (
    <section className="w-full bg-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <div className="row flex justify-between items-center px-[40px] py-[60px]">
          
          {/* ==== Left Image ==== */}
          <div className="w-1/2 flex justify-center items-center">
            <img 
              src={SignupImg} 
              alt="signup visual" 
              className="w-[500px] h-auto rounded-[10px] object-contain"
            />
          </div>

          {/* ==== Right Form ==== */}
          <div className="w-1/2 flex flex-col justify-center px-[40px]">
            <h2 className="text-[32px] font-semibold mb-[10px]">Create an account</h2>
            <p className="text-gray-500 mb-[30px]">Enter your details below</p>

            <form className="flex flex-col gap-[18px]">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 focus:border-black outline-none py-[10px] text-[15px]"
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="border-b border-gray-300 focus:border-black outline-none py-[10px] text-[15px]"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-b border-gray-300 focus:border-black outline-none py-[10px] text-[15px]"
              />

              <button
                type="submit"
                className="bg-[#E94560] hover:bg-[#d43750] text-white py-[12px] rounded-[5px] mt-[10px] text-[16px] font-medium transition-all duration-300"
              >
                Create Account
              </button>

              <button
                type="button"
                className="flex justify-center items-center gap-[10px] border py-[10px] rounded-[5px] mt-[10px] hover:bg-gray-100 transition-all"
              >
                <FcGoogle className="text-[20px]" />
                <span>Sign up with Google</span>
              </button>
            </form>

            <p className="text-center mt-[25px] text-[14px] text-gray-600">
              Already have account?{' '}
              <Link to="/login" className="text-black underline underline-offset-4 hover:text-[#E94560]">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup

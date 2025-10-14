import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router' // ✅ 

const Signin = () => {
  return (
    <section className="w-full bg-white min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="row flex flex-col-reverse lg:flex-row justify-between items-center gap-10 px-[20px] md:px-[40px] py-[40px] md:py-[60px]">
          
          {/* ==== Left Image ==== */}
          <div className="w-full hidden lg:block flex justify-center items-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHK6GXYoBQ4at1IyUqwfcCL5hbgiGLo3MdQ&s" 
              alt="signin visual" 
              className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto rounded-[10px] object-contain"
            />
          </div>

          {/* ==== Right Form ==== */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 sm:px-[20px] md:px-[40px]">
            <h2 className="text-[26px] sm:text-[28px] md:text-[32px] font-semibold mb-[10px] text-center lg:text-left">
              Welcome Back
            </h2>
            <p className="text-gray-500 mb-[30px] text-center lg:text-left">
              Enter your credentials to sign in
            </p>

            <form className="flex flex-col gap-[18px]">
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

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-[5px] gap-2 sm:gap-0">
                <label className="flex items-center gap-[6px] text-gray-600 text-[14px]">
                  <input type="checkbox" className="accent-[#E94560]" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-[#E94560] text-[14px] hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="bg-[#E94560] hover:bg-[#d43750] text-white py-[12px] rounded-[5px] mt-[15px] text-[16px] font-medium transition-all duration-300"
              >
                Sign In
              </button>

              <button
                type="button"
                className="flex justify-center items-center gap-[10px] border py-[10px] rounded-[5px] mt-[10px] hover:bg-gray-100 transition-all"
              >
                <FcGoogle className="text-[20px]" />
                <span>Sign in with Google</span>
              </button>
            </form>

            <p className="text-center mt-[25px] text-[14px] text-gray-600">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-black underline underline-offset-4 hover:text-[#E94560]">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin

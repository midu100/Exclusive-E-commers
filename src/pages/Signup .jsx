import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router' // ✅ Correct for React Router
import SignupImg from '../assets/img/qr.png' // your local image path
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { Slide, toast } from 'react-toastify';

const Signup = () => {
  const auth = getAuth();

  const [formData,setFormData] = useState({Name:'',email : '',password :'',errors:''})
  
  const handleRegister = (e)=>{
    e.preventDefault()

    if(!formData.Name || !formData.email || !formData.password) return setFormData((prev)=>({...prev,errors: 'All feild must be filled in.'}))


      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          // ...
          updateProfile(auth.currentUser, {displayName: formData.Name, photoURL: "https://example.com/jane-q-user/profile.jpg"})
              .then(() => {
              // Profile updated!
              // ...
              sendEmailVerification(auth.currentUser)
                .then(() => {
                  // Email verification sent!
                  // ...

                  toast.success('Email verification send', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                      transition: Slide,
                      });
                });
            }).catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode)

          if(errorCode == 'auth/email-already-in-use') return toast.error('Email or Password already exist', {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                          transition: Slide,
                          });
        });

  }
  

  return (
    <section className="w-full bg-white min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="row flex flex-col-reverse lg:flex-row justify-between items-center gap-10 px-[20px] md:px-[40px] py-[40px] md:py-[60px]">
          
          {/* ==== Left Image ==== */}
          <div className="w-full hidden lg:block flex justify-center items-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHK6GXYoBQ4at1IyUqwfcCL5hbgiGLo3MdQ&s"
              alt="signup visual"
              className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto rounded-[10px] object-contain"
            />
          </div>

          {/* ==== Right Form ==== */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 sm:px-[20px] md:px-[40px]">
            <h2 className="text-[26px] sm:text-[28px] md:text-[32px] font-semibold mb-[10px] text-center lg:text-left">
              Create an account
            </h2>
            <p className="text-gray-500 mb-[30px] text-center lg:text-left">
              Enter your details below
            </p>

              <p className='text-[14px] font-mono text-red-500 text-center'>{formData.errors}</p>

            <form onSubmit={handleRegister} className="flex flex-col gap-[18px]">
              <input onChange={(e)=>{setFormData((prev)=>({...prev,Name:e.target.value})),setFormData((prev)=>({...prev,errors:''}))}}
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 focus:border-black outline-none py-[10px] text-[15px]"
              />
              <input onChange={(e)=>{setFormData((prev)=>({...prev,email:e.target.value})),setFormData((prev)=>({...prev,errors:''}))}}
                type="email"
                placeholder="Email "
                className="border-b border-gray-300 focus:border-black outline-none py-[10px] text-[15px]"
              />
              <input onChange={(e)=>{setFormData((prev)=>({...prev,password:e.target.value})),setFormData((prev)=>({...prev,errors:''}))}}
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
              <Link
                to="/login"
                className="text-black underline underline-offset-4 hover:text-[#E94560]"
              >
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

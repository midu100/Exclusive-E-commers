import React from 'react'
import MusicBg from "../assets/img/music.png";
import { FaApple } from 'react-icons/fa';

const MusicExperience  = () => {
  return (
    <>
      <section className='pb-[71px]'>
         <div className="container">
            <div className="row">
                <div className="flex-1 relative bg-black rounded-[10px] py-[69px] overflow-hidden">
                              <img
                                src={MusicBg}
                                alt="iPhone"
                                className="absolute right-0 top-0 h-full object-cover"
                              />
                
                              <div className="relative z-10 p-[40px] text-white">
                                <p className="text-[18px] font-semibold text-[#00FF66] opacity-80 mb-2 flex gap-[15px] items-center">
                                  Categories
                                </p>
                
                                <h1 className="text-[48px] font-bold leading-snug w-[443px]">
                                  Enhance Your Music Experience
                                </h1>
                                   
                                   {/* timer */}
                                <div className="flex gap-[15px] mt-4 md:mt-[32px]">
                                    <div className="text-center bg-gray-100 rounded-full h-[70px] w-[70px] flex flex-col justify-center">
                                        <p className="text-[22px] font-bold text-red-500">03</p>
                                        <p className="text-[12px] text-red-500 capitalize">Days</p>
                                    </div>
                                    <div className="text-center bg-gray-100 rounded-full h-[70px] w-[70px] flex flex-col justify-center">
                                        <p className="text-[22px] font-bold text-red-500">23</p>
                                        <p className="text-[12px] text-red-500 capitalize">Hours</p>
                                    </div>
                                    <div className="text-center bg-gray-100 rounded-full h-[70px] w-[70px] flex flex-col justify-center">
                                        <p className="text-[22px] font-bold text-red-500">19</p>
                                        <p className="text-[12px] text-red-500 capitalize">Minutes</p>
                                    </div>
                                    <div className="text-center bg-gray-100 rounded-full h-[70px] w-[70px] flex flex-col justify-center">
                                        <p className="text-[22px] font-bold text-red-500">56</p>
                                        <p className="text-[12px] text-red-500 capitalize">Seconds</p>
                                    </div>
                                </div>
                
                                <button className="mt-[40px]  text-[#fff] w-[171px] h-[56px] bg-[#00FF66] rounded-[8px] font-medium hover:bg-yellow-400 transition duration-300">
                                  Shop Now →
                                </button>
                              </div>
                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default MusicExperience 
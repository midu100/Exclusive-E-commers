import React, { useEffect, useState } from 'react'
import MusicBg from "../assets/img/music.png";
import { FaApple } from 'react-icons/fa';

const MusicExperience  = () => {

  //  =======================================start timer
    const [timeleft,setTimeleft] = useState(
      {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    )
    // console.log(timeleft.seconds)
  
    const endTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000
    useEffect(()=>{
      // console.log(endTime)
  
      const interval = setInterval(() => {
  
        const now = new Date().getTime()
        const distance = endTime - now
  
        if(distance <=0 ){
            clearInterval(interval)
            setTimeleft({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
              })
          }
  
          else{
            const days = Math.floor(distance / (1000*60*60*24))
            const hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60))
            const minutes = Math.floor(distance % (1000*60*60) / (1000*60))
            const seconds  = Math.floor(distance % (1000*60) / 1000)
  
            setTimeleft({days,hours,minutes,seconds})
          }
  
      }, 1000);
  
      return () => clearInterval(interval);
  
    },[])
    // ====================================================end timer

  return (
    <>
      <section className='pb-[71px]'>
         <div className="container mx-auto px-3 sm:px-6">
            <div className="row flex flex-col md:flex-row">
                <div className="flex-1 relative bg-black rounded-[10px] py-[40px] sm:py-[55px] md:py-[69px] overflow-hidden">
                  <img
                    src={MusicBg}
                    alt="iPhone"
                    className="absolute right-0 top-0 w-full md:w-auto h-full object-cover opacity-60 md:opacity-100"
                  />
                
                  <div className="relative z-10 p-5 sm:p-8 md:p-[40px] text-white text-center md:text-left">
                    <p className="text-[16px] sm:text-[18px] font-semibold text-[#00FF66] opacity-80 mb-2 flex gap-[10px] sm:gap-[15px] items-center justify-center md:justify-start">
                      Categories
                    </p>
                
                    <h1 className="text-[28px] sm:text-[38px] md:text-[48px] font-bold leading-snug w-full md:w-[443px] mx-auto md:mx-0">
                      Enhance Your Music Experience
                    </h1>
                                   
                    {/* timer */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-[10px] sm:gap-[15px] mt-4 md:mt-[32px]">
                      <div className="text-center bg-gray-100 rounded-full h-[60px] w-[60px] sm:h-[65px] sm:w-[65px] md:h-[70px] md:w-[70px] flex flex-col justify-center">
                          <p className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-red-500">{timeleft.days}</p>
                          <p className="text-[11px] sm:text-[12px] text-red-500 capitalize">Days</p>
                      </div>
                      <div className="text-center bg-gray-100 rounded-full h-[60px] w-[60px] sm:h-[65px] sm:w-[65px] md:h-[70px] md:w-[70px] flex flex-col justify-center">
                          <p className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-red-500">{timeleft.hours}</p>
                          <p className="text-[11px] sm:text-[12px] text-red-500 capitalize">Hours</p>
                      </div>
                      <div className="text-center bg-gray-100 rounded-full h-[60px] w-[60px] sm:h-[65px] sm:w-[65px] md:h-[70px] md:w-[70px] flex flex-col justify-center">
                          <p className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-red-500">{timeleft.minutes}</p>
                          <p className="text-[11px] sm:text-[12px] text-red-500 capitalize">Minutes</p>
                      </div>
                      <div className="text-center bg-gray-100 rounded-full h-[60px] w-[60px] sm:h-[65px] sm:w-[65px] md:h-[70px] md:w-[70px] flex flex-col justify-center">
                          <p className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-red-500">{timeleft.seconds}</p>
                          <p className="text-[11px] sm:text-[12px] text-red-500 capitalize">Seconds</p>
                      </div>
                    </div>
                
                    <button className="mt-[25px] sm:mt-[30px] md:mt-[40px] text-[#fff] w-[140px] sm:w-[160px] md:w-[171px] h-[48px] sm:h-[52px] md:h-[56px] bg-[#00FF66] rounded-[8px] font-medium hover:bg-red-500 transition duration-[.4s] cursor-pointer mx-auto md:mx-0">
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
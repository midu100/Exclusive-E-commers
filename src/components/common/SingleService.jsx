import React from 'react'



const SingleService = ({logo,service,details}) => {
  return (
    <>
      <div className='w-[259px]'>
        <div className='flex justify-center'>
          <div className="Logo w-[80px] h-[80px] bg-[#b0afaf] rounded-full flex justify-center items-center text-[#fff] text-[40px]">
             <div className='bg-[#000] h-[58px] w-[58px] rounded-full flex justify-center items-center'>
                {logo}
             </div>
          </div>
        </div>

        <h2 className='text-[20px] font-bold mt-[24px] text-center'>{service}</h2>
        <p className='text-[14px] font-normal mt-[8px] text-center'>{details}</p>

      </div>
    </>
  )
}

export default SingleService
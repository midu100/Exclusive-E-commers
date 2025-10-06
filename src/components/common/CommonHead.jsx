import React from 'react'

const CommonHead = ({status,Name}) => {
  return (
    <>
      <div>
        <p className="text-red-500 font-semibold mb-1">{status}</p>
        <h2 className="text-[28px] md:text-[34px] font-bold text-gray-900">
            {Name}
        </h2>
      </div>
    </>
  )
}

export default CommonHead
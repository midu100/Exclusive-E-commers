import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Slide, toast } from 'react-toastify'

const CheckoutPage = () => {
    
    const[delivery,setDelivery]= useState(60)
    const [discountAmount,setDiscountAmount] = useState(0)
    const reduxData = useSelector((state)=>state.redu.cartValue)
    const [coupon,setCoupon] = useState('')
    const [code,setCode]=useState('midu100')
    


    // ======subtotal========
    const subTotal = reduxData.reduce((initial,item)=>{
        return Math.floor(initial + item.price)
    },0)
    console.log(subTotal)


    // ========coupon=========
    const [discountdTotal,setDiscountedTotal]=useState(subTotal)

    const handleCoupon = ()=>{
        
        if(coupon == code){
             const discount = Math.floor(subTotal * 0.15)  // 15% discount
             setDiscountAmount(discount)
             console.log(discount)

             const newTotal = Math.floor(subTotal - discount)
             setDiscountedTotal(newTotal)

             toast.success('Congratulations, You got 15% discount!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
                });
        }

        else{
            setDiscountAmount(0)
            setDiscountedTotal(subTotal)

            toast.warn('Invalid Coupon !', {
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
        }

    }

    // =======Total=========
    const Total = discountdTotal + delivery

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-6 flex flex-col lg:flex-row gap-10'>
        {/* Billing Details */}
        <div className='flex-1 bg-white shadow-lg rounded-2xl p-8'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-800'>Billing Details</h2>
          <form className='flex flex-col gap-5'>

            <div>
              <label className='block text-gray-600 mb-2'>Full Name*</label>
              <input type='text' placeholder='Enter your full name' className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400'/>
            </div>

            <div>
              <label className='block text-gray-600 mb-2'>Phone Number*</label>
              <input type='tel' placeholder='Enter your phone number' className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400'/>
            </div>

            <div>
              <label className='block text-gray-600 mb-2'>Email Address*</label>
              <input type='email' placeholder='Enter your email address' className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400'/>
            </div>
            
            <div>
              <label className='block text-gray-600 mb-2'>Town/City*</label>
              <input type='text' placeholder='Enter your town or city' className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400'/>
            </div>

            <div>
              <label className='block text-gray-600 mb-2'>Street Address*</label>
              <textarea placeholder='Enter your full address' rows='3' className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400'></textarea>
            </div>
            
            <div className='flex items-center mt-4'>
              <input type='checkbox' className='mr-2 accent-red-500' />
              <span className='text-gray-600 text-sm'>Save this information for faster check-out next time</span>
            </div>

          </form>
        </div>

        {/* Order Summary */}
        <div className='w-full lg:w-[40%] bg-white shadow-lg rounded-2xl p-8'>
          <div className='flex flex-col gap-4'>
            
            {/* ===== Product ===== */}

            {
                reduxData && reduxData.length > 0 ?
                reduxData.map((item,i)=>(
                    <div key={i} className='flex justify-between items-center border-b pb-3'>
                        <div className='flex items-center gap-3'>
                            <img src={item.images[0]} alt='LCD Monitor' className='w-[50px] h-[50px] object-cover rounded-md' />
                            <h3 className='text-lg font-medium text-gray-800'>{item?.title}</h3>
                        </div>
                        <p className='text-gray-700'>${item.price}</p>
                   </div>
                ))

                :
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold font-mono text-red-500 py-10 text-center">
                    No Products !
                </h1>
            }

            
            

            {/* ===== Summary Totals ===== */}
            <div className='flex justify-between pt-3'>
              <span className='text-gray-600'>Subtotal:</span>
              <span className='font-medium text-gray-800'>${subTotal}</span>
            </div>
            <div className='flex justify-between pt-3'>
              <span className='text-gray-600'>Discount:</span>
              <span className='font-medium text-gray-800'>-${discountAmount}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Delivery:</span>
              <span className='font-medium text-gray-800'>$ {delivery}</span>
            </div>
            <div className='flex justify-between text-lg font-semibold border-t pt-3'>
              <span>Total:</span>
              <span>${Total}</span>
            </div>

            {/* Payment Methods */}
            <div className='mt-6'>
              <label className='flex items-center gap-3 mb-3'>
                <input type='radio' name='payment' className='accent-red-500' />
                <span className='text-gray-700'>Bank</span>
                <div className='flex gap-2 ml-4'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg' alt='Visa' className='h-6'/>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg' alt='MasterCard' className='h-6'/>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/3/3b/PayPal_logo.svg' alt='PayPal' className='h-6'/>
                </div>
              </label>
              <label className='flex items-center gap-3'>
                <input type='radio' name='payment' className='accent-red-500' />
                <span className='text-gray-700'>Cash on delivery</span>
              </label>
            </div>

            {/* Coupon Code */}
            <div className='flex mt-6 gap-3'>
              <input onChange={(e)=>setCoupon(e.target.value)} type='text' placeholder='Coupon Code' className='flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400'/>
              <button onClick={handleCoupon} className='bg-red-500 hover:bg-red-600 text-white px-5 rounded-md font-medium transition'>Apply Coupon</button>
            </div>

            <p className="text-[16px] sm:text-[17px] font-mono text-red-500 font-medium">
                Get 15% discount using code -{" "}
                <span className="text-[#000] font-bold text-[18px]">{code}</span>
           </p>

            {/* Place Order Button */}
            <button className='w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md mt-6 transition'>Place Order</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutPage

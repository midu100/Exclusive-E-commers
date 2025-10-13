import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { IoTrashBinOutline } from "react-icons/io5";
import { removeCart } from "../Slice";
import { Slide, toast } from "react-toastify";

const Cart = () => {
  const localProduct = JSON.parse(localStorage.getItem("Cart"));
  const reduxData = useSelector((state) => state.redu.cartValue);

  // console.log(reduxData);
  // console.log(localProduct)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);

    // const existingCart = JSON.parse(localStorage.getItem('Cart')) || []
    // const updatedCart = existingCart.filter((item)=>item.id !== id)
    // localStorage.setItem('Cart',JSON.stringify(updatedCart))
    dispatch(removeCart(id));
  };

  // Sub
  const Sub = reduxData?.reduce((initial, item) => {
    return Math.floor(initial + item.price);
  }, 0);
  // console.log(Sub);


  // cupon
  const [cuponCode,setCuponCode] = useState('midu100')
  const [cupon, setCupon] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountedTotal, setDiscountedTotal] = useState(Sub);
  const [delivery,setDelivery] = useState(60)
  const [invalidCupon,setInvalidCupon] =useState('')
  

// ============ cart theke product delete korle orderSummery part auto zero [0] hobe
  useEffect(()=>{
    setDiscountedTotal(Sub)
  },[Sub])     

  useEffect(()=>{
    setDiscountAmount(0)
  },[Sub])

// ======= Handle Discount =========
 const handleDiscount = () => {

  if (cupon === cuponCode) {

    const discount = Math.floor(Sub * 0.15); // 15% discount
    setDiscountAmount(discount);

    const newTotal = Math.floor(Sub - discount);
    setDiscountedTotal(newTotal);

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
  else {

    setDiscountAmount(0);
    setDiscountedTotal(Sub);
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
 };
//   ============ total Price ===============
  const totalPrice = Math.floor(discountedTotal + delivery)


  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] bg-[#fafafa]">
  <div className="container mx-auto px-3 sm:px-6">
    {/* === Cart Header === */}
    <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-8">
      <h2 className="text-[22px] sm:text-[24px] md:text-[26px] font-semibold font-mono">
        Your Shopping Cart
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 md:gap-4 mt-4 md:mt-0">
        <Link
          to={"/"}
          className="px-6 py-2 font-medium rounded-lg bg-[#E94560] text-white hover:bg-red-500 transition duration-300 text-center"
        >
          Exit
        </Link>

        <button className="px-6 py-2 font-medium rounded-lg bg-red-500 text-white hover:bg-[#d43750] transition duration-300">
          Continue Shopping
        </button>
      </div>
    </div>

    {/* === Cart Items === */}
    {reduxData && reduxData.length > 0 ? (
      reduxData.map((item, i) => (
        <div key={i} className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
          {/* --- Single Product --- */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white shadow-md rounded-lg p-4 sm:p-6 w-full">
            <div className="flex items-center gap-4 sm:w-[400px] w-full">
              <img
                src={item?.images[0]}
                alt={item?.title}
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover rounded-lg"
              />
              <p className="text-[16px] sm:text-[18px] font-medium">{item?.title}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center mt-4 sm:mt-0">
              <p className="text-[16px] sm:text-[18px] w-[80px] text-center">${item?.price}</p>

              <select className="border rounded-md px-3 py-2 w-[70px] text-center">
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>

              <button
                onClick={() => handleDelete(item.id)}
                className="text-2xl sm:text-3xl text-red-500 hover:text-red-600 transition duration-300"
              >
                <IoTrashBinOutline />
              </button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold font-mono text-red-500 py-10 text-center">
        Empty Cart!
      </h1>
    )}

    {/* === Bottom Buttons & Total === */}
    <div className="flex flex-col lg:flex-row justify-between gap-6 mt-6">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full lg:w-[60%]">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            onChange={(e) => setCupon(e.target.value)}
            value={cupon}
            type="text"
            placeholder="Coupon Code"
            className="border rounded-md px-4 py-2 w-full sm:w-[250px] focus:outline-none focus:ring-2 focus:ring-[#E94560]"
          />
          <button
            onClick={handleDiscount}
            className="bg-[#E94560] text-white px-4 py-2 rounded-md hover:bg-[#d43750] transition duration-300"
          >
            Apply Coupon
          </button>
        </div>

        <p className="text-[16px] sm:text-[17px] font-mono text-red-500 font-semibold">
          Get 15% discount using code -{" "}
          <span className="text-[#000] font-bold text-[18px]">{cuponCode}</span>
        </p>
      </div>

      {/* Right Side (Order Summary) */}
      <div className="border rounded-lg p-4 sm:p-6 bg-white shadow-md w-full lg:w-[35%]">
        <h3 className="text-[18px] sm:text-[20px] font-semibold mb-4">Cart Total</h3>

        <div className="flex justify-between text-[15px] sm:text-[16px] mb-2">
          <p>Sub:</p>
          <p>${Sub}</p>
        </div>

        <div className="flex justify-between text-[15px] sm:text-[16px] mb-2">
          <p>Discount:</p>
          <p>-${discountAmount}</p>
        </div>

        <div className="flex justify-between text-[15px] sm:text-[16px] mb-4 border-b pb-2">
          <p>Delivery-Charge:</p>
          <p>${delivery}</p>
        </div>

        <div className="flex justify-between text-[16px] sm:text-[18px] mb-4 font-semibold">
          <p>Total:</p>
          <p>${totalPrice}</p>
        </div>

        <button className="bg-[#E94560] text-white w-full py-3 rounded-md hover:bg-[#d43750] transition duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default Cart;

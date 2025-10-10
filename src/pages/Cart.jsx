import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { IoTrashBinOutline } from "react-icons/io5";
import { removeCart } from "../Slice";
import { Slide, toast } from "react-toastify";

const Cart = () => {
  const localProduct = JSON.parse(localStorage.getItem("Cart"));
  const reduxData = useSelector((state) => state.redu.cartValue);

  console.log(reduxData);
  // console.log(localProduct)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);

    //  const existingCart = JSON.parse(localStorage.getItem('Cart')) || [];
    //  const updatedCart = existingCart.filter((item) => item.id !== id);
    //  localStorage.setItem('Cart', JSON.stringify(updatedCart));
    dispatch(removeCart(id));
  };

  // Sub
  const Sub = reduxData.reduce((initial, item) => {
    return Math.floor(initial + item.price);
  }, 0);
  console.log(Sub);


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
    <section className="py-[100px] bg-[#fafafa]">
      <div className="container mx-auto px-[40px]">
        {/* === Cart Header === */}
        <div className="flex justify-between items-center border-b pb-[10px] mb-[30px]">
          <h2 className="text-[24px] font-semibold font-mono">
            Your Shopping Cart
          </h2>
          <div className="flex gap-[10px] items-center">
            <Link
              to={"/"}
              className="px-[30px] py-[10px] font-medium rounded-[10px] bg-[#E94560] text-[#fff] hover:bg-red-500 duration-[.4s]"
            >
              Exit
            </Link>

            <button className="text-[14px] text-white font-mono bg-red-500 px-[30px] py-[10px] rounded-[10px] cursor-pointer">
              Continue Shopping
            </button>
          </div>
        </div>

        {/* === Cart Items === */}
        {reduxData ? (
          reduxData.map((item, i) => (
            <div key={i} className="flex flex-col gap-[20px] mb-[20px]">
              {/* --- Single Product --- */}
              <div className="flex justify-between items-center bg-white shadow-md rounded-[10px] p-[20px]">
                <div
                  className="flex items-center gap-[15px]"
                  style={{ width: "400px" }}
                >
                  <img
                    src={item?.images[1]}
                    alt="LCD Monitor"
                    className="w-[80px] h-[80px] object-cover rounded-[8px]"
                  />
                  <p className="text-[16px] font-medium">{item?.title}</p>
                </div>

                <div className="text-[16px]" style={{ width: "100px" }}>
                  ${item?.price}
                </div>

                <div style={{ width: "100px" }}>
                  <select className="border rounded-[5px] px-[8px] py-[5px] w-[70px]">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>

                <div
                  className="text-[16px] font-semibold"
                  style={{ width: "100px" }}
                >
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-[36px] text-red-500 cursor-pointer"
                  >
                    <IoTrashBinOutline />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-[48px] font-mono font-bold text-red-500 py-[20px] text-center">
            Empty Cart !
          </h1>
        )}

        {/* === Bottom Buttons & Total === */}
        <div className="flex justify-between mt-[40px]">
          {/* Left Side */}
          <div className="flex flex-col gap-[15px]">
            
            <div className="flex gap-[10px]">
              <input
                onChange={(e) => setCupon(e.target.value)}
                value={cupon}
                type="text"
                placeholder="Coupon Code"
                className="border outline-0 rounded-[5px] px-[10px] py-[8px] w-[200px]"
              />
              <button onClick={handleDiscount} className="bg-[#E94560] text-white px-[20px] py-[8px] rounded-[5px] hover:bg-[#d43750] duration-[.4s] cursor-pointer">
                Apply Coupon
              </button>
            </div>

            <p className="text-[17px] font-mono text-red-500 font-semibold">Get 15% discount using code- <span className="text-[#000] text-[22px]">{cuponCode}</span></p>

          </div>

          {/* Right Side */}
          <div className="border rounded-[10px] p-[20px] bg-white shadow-md w-[300px]">
            <h3 className="text-[18px] font-semibold mb-[15px]">Cart Total</h3>

            <div className="flex justify-between text-[15px] mb-[8px]">
              <p>Sub:</p>
              <p>${discountedTotal}</p>
            </div>

            <div className="flex justify-between text-[15px] mb-[8px]">
              <p>Discount:</p>
              <p>-${discountAmount}</p>
            </div>

            <div className="flex justify-between text-[15px] mb-[8px] border-b pb-[8px]">
              <p>Delivery-Charge:</p>
              <p>${delivery}</p>
            </div>

            <div className="flex justify-between text-[15px] mb-[20px]">
              <p>Total:</p>
              <p className="font-semibold">${totalPrice}</p>
            </div>

            <button className="bg-[#E94560] text-white w-[250px] py-[10px] rounded-[5px] hover:bg-[#d43750]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

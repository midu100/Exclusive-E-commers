import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import qr from "../assets/img/qr.png"; // তোমার QR image path
import googlePlay from "../assets/img/googlePlay.png"; // তোমার Google Play image path
import appStore from "../assets/img/appStore.png"; // তোমার App Store image path

const Footer = () => {
  return (
    <footer className="bg-black text-white py-[60px]">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-[40px] border-b border-gray-700 pb-8">
          
          {/* Exclusive Section */}
          <div className="flex flex-col gap-4 w-full sm:w-[200px]">
            <h2 className="text-[22px] font-semibold">Exclusive</h2>
            <h3 className="text-[16px] font-medium">Subscribe</h3>
            <p className="text-gray-400 text-[14px]">Get 10% off your first order</p>
            <div className="flex items-center bg-transparent border border-gray-500 rounded-[6px] px-2 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-gray-300 text-[14px] flex-1 outline-none px-1"
              />
              <button className="text-white hover:text-red-500 transition text-[18px]">
                ➤
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3 w-full sm:w-[200px]">
            <h3 className="text-[18px] font-semibold">Support</h3>
            <p className="text-gray-400 text-[14px] leading-6">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-gray-400 text-[14px]">exclusive@gmail.com</p>
            <p className="text-gray-400 text-[14px] hover:text-red-500 transition">
              +88015-88888-9999
            </p>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-3 w-full sm:w-[150px]">
            <h3 className="text-[18px] font-semibold">Account</h3>
            <ul className="text-gray-400 text-[14px] space-y-2">
              <li className="hover:text-red-500 transition">My Account</li>
              <li className="hover:text-red-500 transition">Login / Register</li>
              <li className="hover:text-red-500 transition">Cart</li>
              <li className="hover:text-red-500 transition">Wishlist</li>
              <li className="hover:text-red-500 transition">Shop</li>
            </ul>
          </div>

          {/* Quick Link */}
          <div className="flex flex-col gap-3 w-full sm:w-[150px]">
            <h3 className="text-[18px] font-semibold">Quick Link</h3>
            <ul className="text-gray-400 text-[14px] space-y-2">
              <li className="hover:text-red-500 transition">Privacy Policy</li>
              <li className="hover:text-red-500 transition">Terms Of Use</li>
              <li className="hover:text-red-500 transition">FAQ</li>
              <li className="hover:text-red-500 transition">Contact</li>
            </ul>
          </div>

          {/* Download App */}
          <div className="flex flex-col gap-4 w-full sm:w-[220px]">
            <h3 className="text-[18px] font-semibold">Download App</h3>
            <p className="text-gray-400 text-[14px]">Save $3 with App New User Only</p>
            <div className="flex items-center gap-3">
              <img src={qr} alt="QR Code" className="w-[80px] h-[80px]" />
              <div className="flex flex-col gap-2">
                <img src={googlePlay} alt="Google Play" className="w-[120px]" />
                <img src={appStore} alt="App Store" className="w-[120px]" />
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <FaFacebookF className="text-gray-400 hover:text-red-500 transition" />
              <FaTwitter className="text-gray-400 hover:text-red-500 transition" />
              <FaInstagram className="text-gray-400 hover:text-red-500 transition" />
              <FaLinkedinIn className="text-gray-400 hover:text-red-500 transition" />
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="text-center text-gray-500 text-[14px] mt-6">
          © Copyright Kazi Mridul 2025. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

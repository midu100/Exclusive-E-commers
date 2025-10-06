import React from "react";
import { Link } from "react-router";
import CommonHead from "./common/CommonHead";
import New1 from '../assets/img/New1.png'
import New2 from '../assets/img/New2.png'
import New3 from '../assets/img/New3.png'
import New4 from '../assets/img/New4.png'

const NewArrival = () => {
  return (
    <section className="pb-[140px] bg-white">
      <div className="container mx-auto px-4">
        <div className="row flex flex-col gap-[40px]">

          {/* ===== Header Part ===== */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <CommonHead status={"Featured"} Name={"New Arrival"} />
          </div>

          {/* ===== Products Section (Flex Layout) ===== */}
          <div className="flex flex-col lg:flex-row  flex-wrap justify-between items-stretch">

            {/* ===== Left Big Product ===== */}
            <div className="relative  md:w-[800px] md:h-[700px] rounded-[12px] overflow-hidden group">
              <img
                src={New1}
                alt="PlayStation 5"
                className="w-full  object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-[22px] font-semibold">PlayStation 5</h3>
                <p className="text-[14px] text-gray-200 max-w-[250px]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Link to="/shop" className="block mt-2 underline hover:text-gray-300 transition">
                  Shop Now
                </Link>
              </div>
            </div>

            {/* ===== Right Side Small Products (Vertical Stack) ===== */}
            <div className="flex flex-col flex-wrap gap-[30px] justify-between w-[570px] h-[700px] ">

              {/* -- Women’s Collections -- */}
              <div className="relative rounded-[12px] md:w-[570px] overflow-hidden group">
                <img
                  src={New2}
                  alt="Women’s Collections"
                  className="w-full h-[200px] md:h-[284px] object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-[20px] font-semibold">Women’s Collections</h3>
                  <p className="text-[14px] text-gray-200 max-w-[250px]">
                    Featured woman collections that give you another vibe.
                  </p>
                  <Link
                    to="/shop"
                    className="block mt-2 underline hover:text-gray-300 transition"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* -- Bottom Row (Speakers & Perfume) -- */}
              <div className="flex flex-col sm:flex-row gap-[20px] flex-1">

                {/* Speakers */}
                <div className="relative rounded-[12px] w-[270px] h-[284px] overflow-hidden group ">
                  <img
                    src={New3}
                    alt="Speakers"
                    className="w-full  object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="text-[20px] font-semibold">Speakers</h3>
                    <p className="text-[14px] text-gray-200 max-w-[250px]">
                      Amazon wireless speakers.
                    </p>
                    <Link
                      to="/shop"
                      className="block mt-2 underline hover:text-gray-300 transition"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>

                {/* Perfume */}
                <div className="relative rounded-[12px] w-[270px] h-[284px] overflow-hidden group ">
                  <img
                    src={New4}
                    alt="Perfume"
                    className="w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="text-[20px] font-semibold">Perfume</h3>
                    <p className="text-[14px] text-gray-200 max-w-[250px]">
                      GUCCI INTENSE-OUD EDP.
                    </p>
                    <Link
                      to="/shop"
                      className="block mt-2 underline hover:text-gray-300 transition"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;

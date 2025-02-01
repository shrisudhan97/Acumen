import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import stars from "../assets/stars.png";
import bottom from "../assets/horizons_village.png";
function Landing() {
  return (
    <>
      <div className="text-white relative bg-gradient-to-b from-topColor via-middleColor to-bottomColor">
      <div className="absolute inset-0 bg-cover bg-center my-12" >
      <img src={stars} alt="Bottom Image" className="w-full object-contain scale-150" />
      </div>

        <div className="max-w-[800px] w-full h-[610px] mx-auto text-center gap-x-50 gap-y-0 flex max-lg:flex-col justify-center">
          <div className="flex flex-col justify-center text-center item-center">
            <p className="md:text-3xl sm:text-2xl sm:mt-10 text-1xl font-bold p-2 font-sofia">
              Kongu Engineering College
            </p>
            <p className="md:text-3xl sm:text-2xl sm:mt-10 text-1xl font-bold  p-2">
              ECE Association & IETE Student Forum
            </p>
            <p className="md:text-4xl sm:text-3xl sm:mt-10 text-xl font-bold">
              Proudly Presents
            </p>
            <div className="relative">
              <h1 className="md:text-7xl sm:text-6xl sm:mt-8 text-4xl font-bold md:py-4 text-[var(--red)] font-runes">
                ACUMEN 2k25
              </h1>
            </div>
            <p className="md:text-2xl text-xl font-bolder text-gray-500 pb-5 font-harry">
              March 04, 2025
            </p>
            <TypeAnimation
              className="md:text-5xl font-mono sm:text-4xl text-xl font-bold"
              sequence={[
                "Online-Registration opens",
                15000,
                "Cash Prize upto ₹15k",
                15000,
              ]}
              wrapper="span"
              cursor={true}
              speed={5}
              repeat={Infinity}
            />
            <div className="register_but object-contain inset-0 font-harry">
              <Link to="/event">
                <button className="bg-[#f56511] text-white text-lg w-[200px] rounded-md font-medium my-6 mx-auto py-3">
                  Register soon
                </button>
              </Link>
            </div>
            <p className="md:text-lg text-sm text-white z-10">
              Last date to Register March 01,2025.
            </p>
          </div>
        </div>
        <div className="bottom-0 inset-0 left-0 w-full overflow-hidden">
          <img src={bottom} alt="Bottom Image" className="scale-150" />
        </div>
      </div>
    </>
  );
}

export default Landing;

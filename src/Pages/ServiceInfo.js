import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import Img_1 from "../Images/Vector (1).png";
import Img_2 from "../Images/Vector.png";
import Img_3 from "../Images/Vector (2).png";

const ServiceInfo = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 gap-3">
      <div className=" bg-[#FFFFFF] rounded-md shadow-md px-4 py-5 space-y-3">
        <div className="flex justify-between items-center text-[#1E1E1E]">
          <p className="text-[#!E1E1E] font-medium text-lg">Cardiology</p>
          <FaHeartbeat className="text-3xl text-[#642DFF]" />
        </div>
        <h3 className="text-lg text-[#585757]">
          Seduahag perspiciati under omnised atused error.
        </h3>
        <button className="text-[#1E1E1E] font-semibold text-2xl border-none pt-3">
          Explore Now
        </button>
      </div>
      <div className=" bg-[#FFFFFF] rounded-md shadow-md px-4 py-5 space-y-3">
        <div className="flex justify-between items-center text-[#1E1E1E]">
          <p className="text-[#!E1E1E] font-medium text-lg">Monthly Check Up</p>
          <img src={Img_1} alt="" />
        </div>
        <h3 className="text-lg text-[#585757]">
          Seduahag perspiciati under omnised atused error.
        </h3>
        <button className="text-[#1E1E1E] font-semibold text-2xl border-none pt-3">
          Explore Now
        </button>
      </div>
      <div className=" bg-[#FFFFFF] rounded-md shadow-md px-4 py-5 space-y-3">
        <div className="flex justify-between items-center text-[#1E1E1E]">
          <p className="text-[#!E1E1E] font-medium text-lg">Dental Care</p>
          <img src={Img_2} alt="" />
        </div>
        <h3 className="text-lg text-[#585757]">
          Seduahag perspiciati under omnised atused error.
        </h3>
        <button className="text-[#2D89FF] font-semibold text-2xl border-none pt-3">
          Explore Now
        </button>
      </div>
      <div className=" bg-[#FFFFFF] rounded-md shadow-md px-4 py-5 space-y-3">
        <div className="flex justify-between items-center text-[#1E1E1E]">
          <p className="text-[#!E1E1E] font-medium text-lg">Opthalmology</p>
          <img src={Img_3} alt="" />
        </div>
        <h3 className="text-lg text-[#585757]">
          Seduahag perspiciati under omnised atused error.
        </h3>
        <button className="text-[#1E1E1E] font-semibold text-2xl border-none pt-3">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default ServiceInfo;

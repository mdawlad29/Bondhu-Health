import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const CompanyInfo = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl text-[#2D89FF] font-semibold">
        Doc<span className="text-[#662DFF]">mic</span>
      </h2>
      <h3 className="text-lg text-[#585757] text-justify">
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's
      </h3>
      <div className="flex gap-5">
        <a target="_blank" href="https://www.facebook.com/awlads">
          <BsFacebook className="inline w-10 h-10 p-1 rounded-md bg-[#FFFFFF] shadow-md text-[#662DFF] cursor-pointer" />
        </a>
        <FaInstagramSquare className="inline w-10 h-10 p-1 rounded-md bg-[#FFFFFF] shadow-md text-[#662DFF] cursor-pointer" />
        <a href="https://www.google.com" target="_blank">
          <AiFillGoogleCircle className="inline w-10 h-10 p-1 rounded-md text-[#662DFF] cursor-pointer" />
        </a>
        <AiFillTwitterCircle className="inline w-10 h-10 p-1 rounded-md bg-[#FFFFFF] shadow-md text-[#662DFF] cursor-pointer" />
        <AiFillYoutube className="inline w-10 h-10 p-1 rounded-md bg-[#FFFFFF] shadow-md text-[#662DFF] cursor-pointer" />
      </div>
      
    </div>
  );
};

export default CompanyInfo;

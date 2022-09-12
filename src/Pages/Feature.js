import React from "react";
import FeatureImg from "../Images/pose_7.png";
import imageOne from "../Images/image 5.png";
import imageTwo from "../Images/image 6.png";
import imageThree from "../Images/image 7.png";
import imageFour from "../Images/image 8.png";

const Feature = () => {
  return (
    <div className="bg-[#F7F7F7] md:px-24 px-4 grid lg:grid-cols-3 grid-cols-1 items-center md:gap-6 gap-3 lg:py-16 py-8">
      {/* --leftImg-- */}
      <div className="col-span-1">
        <div className="relative">
          <div className="rounded-full w-40 h-40 mt-10 bg-gradient-to-b p-[6px] from-[#642DFF] via-[#F7F7F7] m-auto">
            <div className="w-32 h-32 items-center mx-auto my-3 ease-in duration-300 rounded-full bg-[#F7F7F7] relative"></div>
          </div>
          <img
            className="absolute lg:w-80 lg:h-80 -top-8 md:left-24 lg:left-4"
            src={FeatureImg}
            alt=""
          />
          <div className="bg-red-300 w-28 h-28 rounded-full"></div>
        </div>
      </div>
      {/* --rightInfo-- */}
      <div className="space-y-4 col-span-2 ">
        <p className="text-base text-[#642DFF] font-medium capitalize">
          our hospital feature
        </p>
        <h2 className="text-3xl font-semibold text-[#1E1E1E] capitalize">
          make an appointment easy and fast <br /> services
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className=" bg-[#FFFFFF] rounded-md shadow-md px-4 py-2 space-y-1">
            <div className="flex justify-between items-center text-[#1E1E1E]">
              <p className="text-[#!E1E1E] font-medium text-lg">
                24 hour doctors support
              </p>
              <img
                className="inline w-12 h-12 bg-[#d5eef7] p-2 rounded-full"
                src={imageOne}
                alt=""
              />
            </div>
            <h3 className="text-lg text-[#585757] text-justify">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </h3>
          </div>
          <div className=" bg-[#FFFFFF] rounded-md shadow-md px-4 py-2 space-y-1">
            <div className="flex justify-between items-center text-[#1E1E1E]">
              <p className="text-[#!E1E1E] font-medium text-lg">
                24 hour doctors support
              </p>
              <img
                className="inline w-12 h-12 bg-[#f4dff5] p-2 rounded-full"
                src={imageTwo}
                alt=""
              />
            </div>
            <h3 className="text-lg text-[#585757] text-justify">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </h3>
          </div>
          <div className=" bg-[#FFFFFF] rounded-md shadow-md px-4 py-2 space-y-1">
            <div className="flex justify-between items-center text-[#1E1E1E]">
              <p className="text-[#!E1E1E] font-medium text-lg">
                24 hour doctors support
              </p>
              <img
                className="inline w-12 h-12 bg-[#c2e8f3] p-2 rounded-full"
                src={imageThree}
                alt=""
              />
            </div>
            <h3 className="text-lg text-[#585757] text-justify">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </h3>
          </div>
          <div className=" bg-[#FFFFFF] rounded-md shadow-md px-4 py-2 space-y-1">
            <div className="flex justify-between items-center text-[#1E1E1E]">
              <p className="text-[#!E1E1E] font-medium text-lg">
                24 hour doctors support
              </p>
              <img
                className="inline w-12 h-12 bg-[#f1e85f] p-2 rounded-full"
                src={imageFour}
                alt=""
              />
            </div>
            <h3 className="text-lg text-[#585757] text-justify">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

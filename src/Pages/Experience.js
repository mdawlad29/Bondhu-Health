import React from "react";
import ExImg from "../Images/pose_4.png";

const Experience = () => {
  return (
    <div className="bg-[#F7F7F7] md:px-24 px-4 grid lg:grid-cols-2 grid-cols-1 md:gap-6 gap-3 lg:py-16 py-8">
      {/* --leftInfo-- */}
      <div className="space-y-5 lg:order-1 order-2">
        <p className="text-base text-[#642DFF] font-medium capitalize">
          16+ years experience
        </p>
        <h2 className="text-3xl font-semibold text-[#1E1E1E] capitalize">
          we are always ensure best medical treatment for your health
        </h2>
        <p className="text-sm text-[#575757] text-justify">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look lik
        </p>
      </div>
      {/* --rightImg-- */}
      <div className="lg:order-2 order-1 lg:pb-0 pb-14">
        <div className="relative">
          <div className="rounded-full w-40 h-40 mt-10 bg-gradient-to-b p-[6px] from-[#642DFF] via-[#F7F7F7] m-auto">
            <div className="w-32 h-32 items-center mx-auto my-3 ease-in duration-300 rounded-full bg-[#F7F7F7] relative"></div>
          </div>
          <img
            className="absolute lg:w-80 lg:h-80 top-3 md:left-28 lg:left-28"
            src={ExImg}
            alt=""
          />
          <div className="bg-red-300 w-28 h-28 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

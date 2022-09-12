import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import BannerImg from "../Images/pose_2.png";

const Banner = () => {
  return (
    <div className="bg-[#F7F7F7]  md:px-24 md:py-12 px-4 py-6">
      <div className="grid lg:grid-cols-2 lg:gap-16 gap-5">
        {/* --leftInfo-- */}
        <div className="md:space-y-5 space-y-2 lg:px-0 lg:order-1 order-2">
          <h2 className="lg:text-6xl md:text-6xl text-4xl font-semibold text-[#1E1E1E]">
            Your <span className="text-[#2D89FF]">Health</span> Is Our
          </h2>
          <h2 className="lg:text-6xl md:text-6xl text-4xl font-semibold text-[#1E1E1E]">
            Top <span className="text-[#662DFF]">Priority</span>
          </h2>
          <p className="lg:text-base md:text-lg text-sm text-[#575757]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, accusamus.
          </p>
          <button className="bg-[#2D89FF] text-white py-3 px-8 text-lg rounded-md">
            Free Consulation
          </button>
          {/* --rating-- */}
          <div className="flex flex-wrap items-center lg:gap-16 md:gap-20 gap-4 md:pt-14 pt-4 ">
            <div className="">
              <h2 className="lg:text-3xl md:text-4xl text-xl font-semibold text-[#662DFF] text-center">
                262K+
              </h2>
              <p className="lg:text-base md:text-lg text-sm text-[#575757]">
                Recovered Patients
              </p>
            </div>
            <div className="">
              <h2 className="lg:text-3xl md:text-4xl text-xl font-semibold text-[#662DFF] text-center">
                96%
              </h2>
              <p className="lg:text-base md:text-lg text-sm text-[#575757]">
                Satisfaction Rate
              </p>
            </div>
            <div className="">
              <h2 className="lg:text-3xl md:text-4xl text-xl font-semibold text-[#662DFF] text-center">
                86+
              </h2>
              <p className="lg:text-base md:text-lg text-sm text-[#575757]">
                Experts Doctors
              </p>
            </div>
          </div>
        </div>
        {/* --rightImg-- */}
        <div className="relative lg:order-2 order-1">
          <div className="rounded-full lg:w-96 lg:h-96 md:w-[30.5rem] md:h-[30.5rem] w-72 h-72 mx-10 mt-10 bg-gradient-to-b p-[6px] from-[#642DFF] via-[#F7F7F7]  ">
            <div className="lg:w-72 lg:h-72 md:w-[25rem] md:h-[25rem] w-52 h-52 items-center mx-auto my-10 rounded-full bg-[#F7F7F7] relative"></div>
          </div>
          <img
            className="absolute lg:w-82 lg:h-82 md:w-96 md:h-96 w-56 h-56 lg:top-7 lg:left-12 md:top-5 md:left:-24 top-6 left-24"
            src={BannerImg}
            alt=""
          />
          <div className="flex gap-3 items-center absolute lg:-left-12 lg:bottom-20 md:bottom-48 bottom-28">
            <button className="bg-[#2D89FF] text-white py-3 md:px-8 px-2 text-lg rounded-md">
              Regular Checkup
            </button>
          </div>
          <div className="bg-[#FFFFFF] px-2 py-1 rounded-md shadow-md w-48 absolute lg:right-16 lg:bottom-7 md:bottom-36 md:right-12 bottom-0 right-5">
            <h3 className="text-sm text-[#575757]">Meet our doctors</h3>
            <AvatarGroup>
              <Avatar
                alt="Remy Sharp"
                src="https://www.guelphfht.com/wp-content/uploads/2015/09/Female-Doctor.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://www.guelphfht.com/wp-content/uploads/2015/09/Female-Doctor.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://www.guelphfht.com/wp-content/uploads/2015/09/Female-Doctor.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://www.guelphfht.com/wp-content/uploads/2015/09/Female-Doctor.jpg"
              />
              <IoMdAdd className="inline w-6 h-6 p-1 text-white mt-2 rounded-full bg-[#2D89FF]" />
            </AvatarGroup>
            <div className="bg-gradient-to-r from-[#a8dbee] to-[#FFFF] h-3 my-1 rounded-full"></div>
            <div className="bg-gradient-to-r from-[#dbeef5] to-[#FFFF] h-3 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

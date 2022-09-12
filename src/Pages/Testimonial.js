import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import img from "../Images/Ikbal 1.png";

const Testimonial = () => {
  return (
    <div className="carousel w-full bg-[#F7F7F7] py-16">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl m-auto bg-[#FFFFFF] px-4 py-3 rounded-md shadow-md">
          <div className="space-y-7 lg:order-1 order-2">
            <div className="text-lg font-medium text-[#1E1E1E]">
              <h2>Devid Jeams</h2>
              <h3>Pratient</h3>
            </div>
            <p className="text-base text-[#575757] text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quas
              provident dolores sapiente eum ex neque delectus quae recusandae
              esse facilis atque ut suscipit temporibus animi, ipsum, nemo
              itaque magni!
            </p>
          </div>
          <img
            src={img}
            className="boject-contain flex lg:pl-40 md:pl-64 pl-20 lg:order-2 order-1"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4">
            <AiFillCaretLeft className="inline w-12 h-12 rounded-full bg-[#dbeef5] p-2 lg:ml-36 text-[#90D4ED]" />
          </a>
          <a href="#slide2">
            <AiFillCaretRight className="inline w-12 h-12 rounded-full bg-[#dbeef5] p-2 lg:mr-36 text-[#90D4ED]" />
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl m-auto bg-[#FFFFFF] px-4 py-3 rounded-md shadow-md">
          <div className="space-y-7 lg:order-1 order-2">
            <div className="text-lg font-medium text-[#1E1E1E]">
              <h2>Devid Jeams</h2>
              <h3>Pratient</h3>
            </div>
            <p className="text-base text-[#575757] text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quas
              provident dolores sapiente eum ex neque delectus quae recusandae
              esse facilis atque ut suscipit temporibus animi, ipsum, nemo
              itaque magni!
            </p>
          </div>
          <img
            src={img}
            className="boject-contain flex lg:pl-40 md:pl-64 pl-20 lg:order-2 order-1"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3">
            <AiFillCaretLeft className="inline w-12 h-12 rounded-full bg-[#dbeef5] p-2 lg:ml-36 text-[#90D4ED]" />
          </a>
          <a href="#slide1">
            <AiFillCaretLeft className="inline w-12 h-12 rounded-full bg-[#dbeef5] p-2 lg:mr-36 text-[#90D4ED]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

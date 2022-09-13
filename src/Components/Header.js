import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <li className="text-lg text-[#2D89FF]">
        <Link to="">Home</Link>
      </li>
      <li className="text-lg text-[#1E1E1E] hover:text-[#2D89FF]">
        <Link to="">About</Link>
      </li>
      <li className="text-lg text-[#1E1E1E] hover:text-[#2D89FF]">
        <Link to="">Departments</Link>
      </li>
      <li className="text-lg text-[#1E1E1E] hover:text-[#2D89FF]">
        <Link to="">Pages</Link>
      </li>
      <li className="text-lg text-[#1E1E1E] hover:text-[#2D89FF]">
        <Link to="">Blog</Link>
      </li>
      <li className="text-lg text-[#1E1E1E] hover:text-[#2D89FF]">
        <Link to="">Contacts</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#F7F7F7] lg:px-24 md:px-16 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#FFFFFF] rounded-box md:w-[40rem] w-[21.5rem]"
          >
            {menuItems}
          </ul>
        </div>
        <h2 className="text-2xl text-[#2D89FF] font-semibold">
          Doc<span className="text-[#662DFF]">mic.</span>
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="bg-[#2D89FF] text-lg text-white py-3 px-4 rounded-md">
          Free Consulation
        </button>
      </div>
    </div>
  );
};

export default Header;

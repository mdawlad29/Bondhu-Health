import React from "react";

const Hour = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-base text-[#642DFF] font-medium capitalize">
        Opening Hours
      </h2>
      {/* <div className="flex justify-between"> */}
      <div className="text-[#1E1E1E] font-medium text-base pt-3 space-y-2">
        <div className="grid grid-cols-2">
          <h2 className="text-[#2D89FF]">Mon-Tue</h2>
          <h2>08:00 AM - 05:00 PM</h2>
        </div>
        <div className="grid grid-cols-2">
          <h2 className="text-[#2D89FF]">Web-The</h2>
          <h2>09:00 AM - 06:00 PM</h2>
        </div>
        <div className="grid grid-cols-2">
          <h2 className="text-[#2D89FF]">Fri-Sat</h2>
          <h2>10:00 AM - 07:00 PM</h2>
        </div>
        <div className="grid grid-cols-2">
          <h2 className="text-[#2D89FF]">Sunday</h2>
          <h2>Emergency Only</h2>
        </div>
        <div className="grid grid-cols-2">
          <h2 className="text-[#2D89FF]">Personal</h2>
          <h2>Mon - 05:00 PM</h2>
        </div>
      </div>
      {/* <div className="text-[#1E1E1E] font-medium text-base pt-3">
          <ul className="space-y-2">
            <li>
              <Link to="">Services</Link>
            </li>
            <li>
              <Link to="">Our Doctors</Link>
            </li>
            <li>
              <Link to="">Our Latest News</Link>
            </li>
            <li>
              <Link to="">Career</Link>
            </li>
            <li>
              <Link to="">Contact us</Link>
            </li>
          </ul>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Hour;

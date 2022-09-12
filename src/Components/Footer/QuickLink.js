import React from "react";
import { Link } from "react-router-dom";

const QuickLink = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-base text-[#642DFF] font-medium capitalize">
        Quick Links
      </h2>
      <div className="flex justify-between">
        <div className="text-[#1E1E1E] font-medium text-base pt-3">
          <ul className="space-y-2">
            <li>
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">Our Pricing</Link>
            </li>
            <li>
              <Link to="">Our Gallery</Link>
            </li>
            <li>
              <Link to="">Appointment</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="text-[#1E1E1E] font-medium text-base pt-3">
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
        </div>
      </div>
    </div>
  );
};

export default QuickLink;

import React from "react";
import CompanyInfo from "../Components/Footer/CompanyInfo";
import Hour from "../Components/Footer/Hour";
import QuickLink from "../Components/Footer/QuickLink";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] md:space-y-10 space-y-5 lg:px-24 md:px-16 px-4 py-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4">
        <div>
          <CompanyInfo />
        </div>
        <div>
          <QuickLink />
        </div>
        <div>
          <Hour />
        </div>
      </div>
      <p className="text-base text-[#1E1E1E]">
        Copyright @222 Medicom All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

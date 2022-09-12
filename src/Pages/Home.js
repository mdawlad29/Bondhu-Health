import React from "react";
import Banner from "../Components/Banner";
import Experience from "./Experience";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Services />
      <Experience />
      <Feature />
      <FAQ />
      <Testimonial/>
    </div>
  );
};

export default Home;

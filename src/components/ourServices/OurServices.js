import React from "react";
import "./OurServices.css";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";

const OurServices = () => {
  return (
    <div className="container">
      <p className="ourServices">Our Services</p>
      <div className="cards">
        <div className="uxResearch">
          <img src={image1} alt="1" />
          <p className="item">UX Research</p>
        </div>
        <div className="specialContent">
          <img src={image2} alt="2" />
          <p className="item">Special Content</p>
        </div>
        <div className="webDevelopment">
          <img src={image3} alt="3" />
          <p className="item">Web Development</p>
        </div>
        <div className="design">
          <img src={image2} alt="4" />
          <p className="item">Design</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

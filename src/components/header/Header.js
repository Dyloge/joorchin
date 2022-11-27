import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { AiOutlineDown } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="headerContainer">
      <img src={logo} alt="" className="logo" />
      <ul className="tabs">
        <li className="ourStory">Our Story</li>
        <li className="projects">
          Projects
          <AiOutlineDown size={14} />
          <i />
        </li>
        <li className="portfolio">Portfolio</li>
        <li className="careers">Careers</li>
      </ul>
      <button className="headerButton">
        <div className="stripeButton">
          <span className="firstItemButton">Work with us*</span>
          <span className="secondItemButton">Work with us*</span>
        </div>
      </button>
    </div>
  );
};

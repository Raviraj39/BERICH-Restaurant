import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app-header">
    <div className="left-container">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app-header-h1">
        The Key To <br /> Fine Dining
      </h1>
      <p className="p__opensans">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="right-container">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

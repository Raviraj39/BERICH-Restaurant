import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app-chef-main flex__center">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <div className="chef-section-title">
          <SubHeading title="Chef's word" />
          <h1 className="headtext__cormorant">What we believe in</h1>
        </div>
        <div className="chef-para-section">
          <div className="chef-quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
          </div>
          <p className="p__opensans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. aliquam molestie lectus eu. Congue iaculis integer curabitur
            semper sit nunc.
          </p>
        </div>
        <div className="app-chef-sign">
          <p className="chef-name">Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;

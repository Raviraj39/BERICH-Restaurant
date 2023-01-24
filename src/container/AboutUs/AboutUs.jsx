import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";
const AboutUs = () => (
  <div className="app-aboutus app__bg flex__center section__padding ">
    <div className="app-aboutus-overlay flex__center">
      <img src={images.G} alt="G-main" />
    </div>
    <div className="app-aboutus-content flex__center  ">
      <div className="aboutus-content-aboutus">
        <h1 className="headtext__cormorant" id="about">
          About us
        </h1>
        <img src={images.spoon} alt="spoon-aboutus" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
      <div className="aboutus-knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="aboutus-content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon-aboutus" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;

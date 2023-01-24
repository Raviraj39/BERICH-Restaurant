import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app-newsletter">
    <div className="app-newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app-newsletter-input flex__center">
      <input type="email" placeholder="Enter Your Email Address" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;

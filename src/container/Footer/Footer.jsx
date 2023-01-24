import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
const Footer = () => (
  <div className="app_footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app-footer-links">
      <div className="app-footer-links-contact">
        <h1 className="app-footer-headetext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans"> +1 212-555-1230</p>
      </div>
      <div className="app-footer-links-logo">
        <img src={images.berich} alt="logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon-img"
          style={{ marginTop: 15 }}
        />
        <div className="app-footer-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app-footer-link-work">
        <h1 className="app-footer-headetext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday: </p>
        <p className="p__opensans">08:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am -11:00 pm</p>
      </div>
    </div>
    <div className="footer-copyright">
      <p className="p__opensans">2023 Berich. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;

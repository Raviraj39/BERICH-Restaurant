import React from "react";
import { images } from "../../constants";
import PropTypes from "prop-types";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);
SubHeading.propTypes = {
  title: PropTypes.node.isRequired,
};
export default SubHeading;

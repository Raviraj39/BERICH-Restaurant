import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";
import PropTypes from "prop-types";

const Galleryimages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app-gallary flex__center">
      <div className="app--gallary-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallary</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app-gallary-images">
        <div className="app-gallary-images-container" ref={scrollRef}>
          {Galleryimages.map((image, index) => (
            <div
              className="app__gallary-images-card flex__center"
              key={`gallary_image-${index + 1}`}
            >
              <img src={image} alt="gallary " />
              <BsInstagram className="gallary_image-insta" />
            </div>
          ))}
        </div>
        <div className="app-gallary-images-arrow">
          <BsArrowLeftShort
            className="gallary-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallary-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};
Gallery.propTypes = {
  image: PropTypes.node.isRequired,
};
export default Gallery;
//in this project i make gallery corsel which is based on image funtion stored images and we call them using mapping
//scrolling funtioning use this project- onlcick invent call the scroll function and though getting change

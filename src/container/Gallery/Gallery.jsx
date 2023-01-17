import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
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
        <div className="app-gallary-images-contianer" ref={scrollRef}></div>
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
export default Gallery;

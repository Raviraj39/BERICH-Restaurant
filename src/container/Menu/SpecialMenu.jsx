import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images } from "../../constants";
import { data } from "../../constants";
import PropTypes from "prop-types";

import "./SpecialMenu.css";

// const datacamp = data.wines.map((wine) => {
//   return <MenuItem key={data.wines.title} />;
// });
const SpecialMenu = () => (
  <div className="special-menu flex__center section__padding" id="menu">
    <div className="special-menu-title">
      <SubHeading title="Menu That Fits You Palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>
    <div className="app-special-menu">
      <div className="app-wine-menu flex__center">
        <p className="app-wine-menu-header">Wine & Beer</p>
        <div className="app-wine-menu-items">
          {/* <MenuItem
            key={wine.title}
            title={wine.title}
            price={wine.price}
            tags={wine.tags}
          /> */}
          {datacamp}
        </div>
      </div>
      <div className="app-wine-menu-image">
        <img src={images.menu} alt="menu" />
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {/* {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))} */}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);
SpecialMenu.propTypes = {
  price: PropTypes.node.isRequired,
  tags: PropTypes.node.isRequired,
};

export default SpecialMenu;

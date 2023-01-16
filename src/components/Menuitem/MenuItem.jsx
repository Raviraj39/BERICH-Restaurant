import React from "react";

import "./MenuItem.css";
import PropTypes from "prop-types";

const MenuItem = ({ title, price, tags }) => (
  <div className="app-menuitem">
    <div className="app-menitem-head">
      <div className="app-menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="app-menuitem-dash"></div>

      <div className="app-menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="app-menuitem-sub">
      <p className="p__cormorant" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  tags: PropTypes.node.isRequired,
};

export default MenuItem;

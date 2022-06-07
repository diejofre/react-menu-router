import React from "react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

const Item = function ({ name, description, price }) {
  return (
    <li>
      <FaArrowRight />
      <Link to={`${name}`}>
        <strong>{name}</strong>
      </Link>
      <small>- {description}</small>
      <em>${price}</em>
    </li>
  );
};

export default Item;

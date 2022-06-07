import React from "react";

import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <header>
      <Link to="/">
        <h1>
          Coffee Shop <FaCoffee />
        </h1>
      </Link>
    </header>
  );
};

export default Header;

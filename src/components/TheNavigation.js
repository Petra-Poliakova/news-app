import React from "react";
import { NavLink } from "react-router-dom";

//styles
import "../styles/TheNavigation.scss";

function TheNavigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">News</NavLink>
      {/* <NavLink to="/news">News</NavLink> */}
    </nav>
  );
}
export default TheNavigation;

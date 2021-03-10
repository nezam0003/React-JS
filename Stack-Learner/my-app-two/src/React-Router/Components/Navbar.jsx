import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  color: "black",
  fontWeight: "bold",
};
const Navbar = () => {
  return (
    <nav>
      <NavLink activeStyle={style} exact to="/">
        Home
      </NavLink>
      <NavLink activeStyle={style} to="/contact">
        Contact
      </NavLink>
      <NavLink activeStyle={style} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;

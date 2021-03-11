import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink
          activeStyle={{ borderBottom: "2px solid red", color: "black", fontWeight: "bold" }}
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{ borderBottom: "2px solid red", color: "black", fontWeight: "bold" }}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          activeStyle={{ borderBottom: "2px solid red", color: "black", fontWeight: "bold" }}
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;

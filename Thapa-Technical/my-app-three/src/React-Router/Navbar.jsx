import React from "react";
import { NavLink } from "react-router-dom";

const navBarStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "#222",
  padding: "1rem 0rem",
};

const Navbar = () => {
  return (
    <>
      <nav style={navBarStyle}>
        <NavLink
          activeStyle={{ borderBottom: "2px solid red", color: "#fff", fontWeight: "bold" }}
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{ borderBottom: "2px solid red", color: "#fff", fontWeight: "bold" }}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          activeStyle={{ borderBottom: "2px solid red", color: "#fff", fontWeight: "bold" }}
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;

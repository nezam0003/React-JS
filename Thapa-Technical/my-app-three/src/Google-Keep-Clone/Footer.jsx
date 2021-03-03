import React from "react";
import classes from "./Keep.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>copyright &copy; {new Date().toLocaleDateString()}</div>
    </>
  );
};

export default Footer;

import React from "react";
import classes from "../App.module.css";

const Square = (props) => {
  return (
    <div>
      <button className={classes.square} onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;

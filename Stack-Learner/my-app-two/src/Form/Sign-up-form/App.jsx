import React, { Component } from "react";
import SignUp from "./SignUp";
import classes from "./style.module.css";
export default class App extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>React Sign Up Form</h1>
        <SignUp />
      </div>
    );
  }
}

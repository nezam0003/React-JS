import React, { Component } from "react";
// import UncontrolledForm from "./Uncontrolled-form";
// import ControlledForm from "./Controlled-form";
import SpliteForm from "./Split-Form/Index";
import classes from "./Style.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>React Form</h1>
        {/* <UncontrolledForm /> */}
        <SpliteForm />
      </div>
    );
  }
}

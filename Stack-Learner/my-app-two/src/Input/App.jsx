import React, { Component } from "react";
import Input from "./Index";
import classes from "./App.module.css";
export default class App extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Working with forms in React</h1>
        <Input />
      </div>
    );
  }
}

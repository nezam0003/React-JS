import React, { Component } from "react";
import classes from "./App.module.css";
export default class App extends Component {
  buttonClickEventHandler = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Buton Events</h1>
        <button className={classes.btn} onClick={this.buttonClickEventHandler}>
          click
        </button>
      </div>
    );
  }
}

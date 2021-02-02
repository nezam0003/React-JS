import React, { Component } from "react";
import classes from "./App.module.css";
export default class App extends Component {
  state = {
    name: "",
  };
  buttonClickEventHandler = (e) => {
    console.log(e);
  };
  inputTextFieldHandler = (e) => {
    // console.log(e.target.value);
    this.setState({ name: e.target.value });
  };
  focusEventHandler = (e) => {
    console.log("focus events occur");
  };
  blurEventHandler = (e) => {
    if (!this.state.name) {
      alert("eneter name");
    }
    console.log("blur events occur");
  };
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Button Events</h1>
        <button className={classes.btn} onClick={this.buttonClickEventHandler}>
          click
        </button>
        <br />
        <input
          className={classes.inputTextField}
          type="text"
          value={this.state.name}
          placeholder="Enter something"
          onChange={this.inputTextFieldHandler}
          onFocus={this.focusEventHandler}
          onBlur={this.blurEventHandler}
        />
        <br />
        <br />
        {this.state.name && <h3>Welcome, {this.state.name}</h3>}
      </div>
    );
  }
}

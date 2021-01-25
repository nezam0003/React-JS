import React, { Component } from "react";

export default class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fRoll: this.props.roll,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived State from Props");
    console.log(props, state);
    if (props.roll !== state.fRoll) {
      return {
        fRoll: props.roll,
      };
    }
    return null;
  }
  render() {
    console.log("father Randered");

    return (
      <div>
        <h1>{this.state.fRoll}</h1>
      </div>
    );
  }
}

import React, { Component } from "react";
import GrandChild from "./GrandChild";

export default class Child extends Component {
  render() {
    return (
      <>
        <h1>Child Component</h1>
        <GrandChild />
      </>
    );
  }
}

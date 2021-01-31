import React, { Component } from "react";
import Person from "./Person";
import Robot from "./Robot";
export default class App extends Component {
  render() {
    return (
      <div>
        <Person camp="123" />
        <Robot camp="987" />
      </div>
    );
  }
}

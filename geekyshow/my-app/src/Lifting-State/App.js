import React, { Component } from "react";
import User from "./User";
export default class App extends Component {
  state = {
    name: "nezam",
  };
  render() {
    return (
      <div>
        <User name={this.state.name} />
      </div>
    );
  }
}

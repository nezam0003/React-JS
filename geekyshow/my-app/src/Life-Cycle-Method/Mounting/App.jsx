import React, { Component } from "react";
import Student from "./Student";
export default class App extends Component {
  state = {
    age: "27",
  };
  static getDerivedStateFromProps(props, state) {
    console.log("App- Get Derived State From Props");
    console.log("Props ", props);
    console.log("State ", state);
    return null;
  }
  componentDidMount() {
    console.log("App - Component Mounted into the DOM tree");
  }
  render() {
    console.log("App - rendered");
    return (
      <div>
        <Student name="Fhameed" age={this.state.age} />
      </div>
    );
  }
}

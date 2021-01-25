import React, { Component } from "react";

export default class Unmount extends Component {
  componentDidMount() {
    console.log("Unmount Component Did Mount");
  }
  componentWillUnmount() {
    console.log("Unmount component unmounted");
  }
  render() {
    console.log("Unmount Rendered");
    return (
      <div>
        <h1>Hello Unmount component</h1>
      </div>
    );
  }
}

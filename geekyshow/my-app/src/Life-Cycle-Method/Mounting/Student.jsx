import React, { Component } from "react";
import Teacher from "./Teacher";
export default class Student extends Component {
  render() {
    console.log("Student - Rendered");
    return (
      <div>
        <h1>
          Hello {this.props.name} your Age: {this.props.age}
        </h1>
        <Teacher />
      </div>
    );
  }
}

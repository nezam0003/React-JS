import React, { Component } from "react";

export default class Student1 extends Component {
  render() {
    console.log("Student-1 Rendered [child of App]");
    return (
      <div>
        <h1>Student-1 Component</h1>
      </div>
    );
  }
}

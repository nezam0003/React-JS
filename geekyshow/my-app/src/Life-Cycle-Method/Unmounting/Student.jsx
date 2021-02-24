import React, { Component } from "react";

export default class Student extends Component {
  componentDidMount() {
    console.log("Student component Did Mount");
  }
  componentWillUnmount() {
    console.log("Student component will unmount");
  }
  render() {
    console.log("student rendered");
    return (
      <div>
        <h1>Hello Student Component</h1>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Student extends Component {
  state = {
    gender: "",
    name: this.props.name,
  };
  handleClick = (gender, e) => {
    console.log(e);
    this.setState({ gender: "Male" });
  };

  render() {
    return (
      <div>
        <h1>
          Hello, {this.state.name} Gender : {this.state.gender}
        </h1>
        <Button onClick={(e) => this.handleClick(this.state.gender, e)} color="danger">
          click me
        </Button>
      </div>
    );
  }
}

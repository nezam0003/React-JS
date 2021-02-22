import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Student extends Component {
  state = {
    name: this.props.name,
  };
  handleClick = () => {
    console.log("clicked", this);
  };
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <Button onClick={this.handleClick} color="danger">
          click me
        </Button>
      </div>
    );
  }
}

import React, { Component } from "react";
import Student from "./Student";
import { Button } from "reactstrap";

export default class Teacher extends Component {
  state = {
    name: "Nezam",
    id: 1,
  };
  handleClick = () => {
    console.log("button clicked");
    this.setState({
      name: "fhameed",
      id: this.state.id + 1,
    });
  };
  render() {
    console.log("Teacher - component called");
    const { name, id } = this.state;
    return (
      <div>
        <Student name={name} id={id} />
        <Button onClick={this.handleClick}>Change</Button>
      </div>
    );
  }
}

import React, { Component } from "react";
import MyForm from "./My-form";

export default class SpliteForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  inputFieldHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    e.target.reset();
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div>
        <MyForm
          values={this.state}
          inputFieldHandler={this.inputFieldHandler}
          submitHandler={this.submitHandler}
        />
      </div>
    );
  }
}

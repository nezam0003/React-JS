import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    values: {
      name: "",
      email: "",
      password: "",
      birthday: "",
      gender: "",
    },
    agreement: false,
  };
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

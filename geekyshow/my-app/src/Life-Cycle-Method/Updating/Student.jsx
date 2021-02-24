import React, { Component } from "react";

export default class Student extends Component {
  state = {
    sName: this.props.name,
    sId: this.props.id,
  };
  static getDerivedStateFromProps({ name, id }, { sName, sId }) {
    console.log("Student - get derived state from props called");
    console.log(name, id);
    console.log(sName, sId);
    if (name !== sName && id !== sId) {
      return {
        sName: name,
        sId: id,
      };
    }
    return null;
  }
  render() {
    console.log("Student - component called");
    const { sName: name, sId: id } = this.state;
    return (
      <h1>
        Teacher Name : {name} ID: {id}
      </h1>
    );
  }
}

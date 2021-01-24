import React, { Component } from "react";
import App from "./App";
class Student extends Component {
  constructor(props) {
    super(props);
    console.log("Student - Constructor called");
    this.state = {
      name: "nezam",
      id: 101,
      //   age: this.props.age,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Student - Get Derived State From Props");
    console.log(props, state);
    return null;
  }

  componentDidMount() {
    console.log("Student - component Did Mount - Mounted");
  }

  render() {
    console.log("Student - Rendered [parent]");
    return (
      <div>
        <App name={this.state.name} />
      </div>
    );
  }
}
export default Student;

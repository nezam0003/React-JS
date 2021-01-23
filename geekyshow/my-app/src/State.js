import React, { Component } from "react";
// State without Constructor
// class Student extends Component {
//   state = {
//     name: "Nezam",
//     roll: 101,
//     age: this.props.age,
//   };
//   render() {
//     return (
//       <h1>
//         hello {this.state.name} Your Roll No is {this.state.roll} and your age is {this.state.age}
//       </h1>
//     );
//   }
// }
// export default Student;

// State with in constructor
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nezam",
      roll: 101,
      age: this.props.age,
    };
  }
  render() {
    return (
      <h1>
        hello {this.state.name} Your Roll No is {this.state.roll} and your age is {this.state.age}
      </h1>
    );
  }
}
export default Student;

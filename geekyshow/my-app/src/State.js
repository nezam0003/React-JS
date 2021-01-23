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
// class Student extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Nezam",
//       roll: 101,
//       age: this.props.age,
//     };
//   }
//   render() {
//     return (
//       <h1>
//         hello {this.state.name} Your Roll No is {this.state.roll} and your age is {this.state.age}
//       </h1>
//     );
//   }
// }
// export default Student;

/******************* Update state using setState Method ***********/
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nezam",
      roll: 102,
      age: this.props.age,
    };
  }
  handlerClick = () => {
    // Updating state value
    // this.setState({
    //   name: "Fhameed",
    //   roll: 103,
    //   age: 25,
    // });

    // Using function
    this.setState((state, props) => {
      console.log(state.name);
    });
  };
  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name} Your roll is {this.state.roll} and your age is {this.state.age}
        </h1>
        <button onClick={this.handlerClick}>click me</button>
      </div>
    );
  }
}
export default Student;

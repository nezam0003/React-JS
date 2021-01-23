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
// class Student extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Nezam",
//       roll: 102,
//       age: this.props.age,
//     };
//   }
// handlerClick = () => {
// Updating state value
// this.setState({
//   name: "Fhameed",
//   roll: 103,
//   age: 25,
// });

// Using function
//   this.setState((state, props) => {
//     console.log(state.name);
//   });
// };
// render() {
//   return (
//     <div>
//       <h1>
//         Hello {this.state.name} Your roll is {this.state.roll} and your age is {this.state.age}
//       </h1>
//       <button onClick={this.handlerClick}>click me</button>
//     </div>
//   );
// }
// }
// export default Student;

/*************** Passing arguments to Event handler ****************/
class Student extends Component {
  state = {
    id: 1,
    name: "fhameed",
  };
  handlerClick = (id, e) => {
    console.log(id);
    console.log(e);
  };

  /********* Approach 1 ******/
  // handlerClickArg = (e) => {
  //   this.handlerClick(this.state.id, e);
  // };

  render() {
    /********* Approach 1 ******/
    // return (
    //   <div>
    //     <h1>Hello {this.state.name}</h1>
    //     <button onClick={this.handlerClickArg}>Delete</button>
    //   </div>
    // );

    /********* Approach 2 ******/
    // return (
    //   <div>
    //     <h1>Hello {this.state.name}</h1>
    //     <button
    //       onClick={(e) => {
    //         this.handlerClick(this.state.id, e);
    //       }}
    //     >
    //       Delete
    //     </button>
    //   </div>
    // );

    /********* Approach 3 using binding method ******/
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.handlerClick.bind(this, this.state.id)}>Delete</button>
      </div>
    );
  }
}
export default Student;

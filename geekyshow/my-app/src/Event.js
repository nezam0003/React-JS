// import React, { Component } from "react";
// class Student extends Component {
//   handlClick = () => {
//     console.log("Button clicked", this);
//   };
//   render() {
//     return (
//       <div>
//         <h1>Hello Event</h1>
//         <button onClick={this.handlClick}>click here</button>
//       </div>
//     );
//   }
// }
// export default Student;

// function base
import React from "react";

const Student = (props) => {
  const clickHandler = () => {
    console.log("button clicked");
  };
  return (
    <div>
      <h1>Hello Function Event</h1>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};
export default Student;

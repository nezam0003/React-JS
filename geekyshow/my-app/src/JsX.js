import React, { Component } from "react";
// Simple String
/*const el = <h1>Hello JSX</h1>;*/

/***** Math Expression******/
// const val1 = 10;
// const val2 = 20;
// const el = <h1>{val1 + val2}</h1>;

/******* Function ******/

// const sayName = (name) => {
//   return name;
// };
// const el = <h1>Hello {sayName("Nezam")}</h1>;

/****** Object ******/
// const bioData = {
//   name: "Nezam",
//   age: 27,
//   position: "front-end",
// };
// const el = <h1>{bioData.name}</h1>;

/******** JSX with Attributes */
// import "./App.css";
// const el = <h1 className="bgColor txtColor">Hello world</h1>;
// export default el;

/************** Child in JsX **************/
// Function base
// const Student = (props) => {
//   return <h1>Hello Nezam {props.children}</h1>;
// };
// export default Student;

// Class base
class Student extends Component {
  render() {
    return <h1>Hello Class {this.props.children}</h1>;
  }
}
export default Student;
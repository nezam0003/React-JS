// import React, { Component, Fragment } from "react";
// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h2> Hello React </h2>
//         <h2> Hello WOrld </h2>
//       </Fragment>
//     );
//   }
// }
// export default App;

/* ******** Function and class Component *********** */

// ***** Function compunent ****
// import React from "react";
// const Student = (props) => {
//   return <h1>Hello {props.name}</h1>;
// };

// export default Student;

// Class component
import React, { Component } from "react";
class Student extends Component {
  render() {
    return <h1>hello{this.props.name}</h1>;
  }
}
export default Student;

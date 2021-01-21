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

// Composing component
import React from "react";
import Student from "./Student";
const App = () => {
  return (
    <div>
      <Student name="Nezam" />
      <Student name="Reshme" />
      <Student name="Fhameed" />
    </div>
  );
};
export default App;

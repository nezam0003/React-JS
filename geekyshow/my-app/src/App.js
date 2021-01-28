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
// import React from "react";
// import Student from "./Student";
// const App = () => {
//   return (
//     <div>
//       <Student name="Nezam" />
//       <Student name="Reshme" />
//       <Student name="Fhameed" />
//     </div>
//   );
// };
// export default App;

// import React, { Component } from "react";
// import Student1 from "./Student1";

// export default class App extends Component {
//   render() {
//     console.log("App -Rendered [child of Mounting(Student)]");
//     return (
//       <div>
//         <h1>hello, {this.props.name}</h1>
//         <Student1 />
//       </div>
//     );
//   }
// }

/**************** Unmounting component */
// import React, { Component } from "react";

// export default class App extends Component {
//   componentDidMount() {
//     console.log("App did Mount");
//   }
//   render() {
//     console.log("App Rendered");

//     return (
//       <div>
//         <h1>App component</h1>
//       </div>
//     );
//   }
// }

/************* useState Hooks *****************/
// import React, { Fragment, useState } from "react";
// const App = () => {
//   const [name, editName] = useState("Nezam");
//   const changeName = () => {
//     editName("Fhameed");
//   };
//   return (
//     <Fragment>
//       <h1>Hello, {name}</h1>
//       <button type="button" onClick={changeName}>
//         Change Name
//       </button>
//     </Fragment>
//   );
// };
// export default App;

/************* useEffect Hooks *****************/
// import React, { Fragment, useState, useEffect } from "react";
// const App = () => {
//   const [countUp, setCount] = useState(0);
//   const [countDown, setCountDown] = useState(50);
//   const countUpFun = () => {
//     setCount(countUp + 1);
//   };
//   const countDownFun = () => {
//     setCountDown(countDown - 1);
//   };
//   useEffect(() => {
//     console.log("Use Effect Called");
//   }, [countUp]);
//   return (
//     <Fragment>
//       <h1>Count Up: {countUp} </h1>
//       <button type="button" onClick={countUpFun}>
//         increament
//       </button>
//       <h1>Count Down: {countDown} </h1>
//       <button type="button" onClick={countDownFun}>
//         decreament
//       </button>
//     </Fragment>
//   );
// };
// export default App;

/************* Custom Hooks *****************/
// import React, { Fragment } from "react";
// import useCustomCounter from "./Custom";

// const App = () => {
//   const counter = useCustomCounter();
//   return (
//     <Fragment>
//       <h1>Count Up: {counter.count}</h1>
//       <button type="button" onClick={counter.countUpFun}>
//         Increament
//       </button>
//       <h1>Count Down: {counter.countDown}</h1>
//       <button type="button" onClick={counter.countDownFun}>
//         Decreament
//       </button>
//     </Fragment>
//   );
// };
// export default App;

/********** Images/assists use case *************/
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/portfolio-1.jpg"}
          alt="portfolio-1"
          width="300px"
        />
      </div>
    );
  }
}

// import React, { Component, Fragment } from "react";

// export default class App extends Component {
//   render() {
//     // const arr = [10, 20, 30, 40, 50];
//     /* Using props values*/
//     const arr = this.props.numbers;
//     // const newArr = arr.map((value) => {
//     //   return <li>{value * 2}</li>;
//     // });
//     return (
//       // Map inside JSX
//       <Fragment>
//         <ul>
//           {arr.map((value) => (
//             <li>{value * 2}</li>
//           ))}
//         </ul>
//       </Fragment>
//     );
//   }
// }

/**** List using state ****/
import React, { Component, Fragment } from "react";

export default class App extends Component {
  state = {
    users: [
      { id: 1, name: "Nexam", password: "1234565av" },
      { id: 2, name: "fhameed", password: "985424" },
      { id: 3, name: "khan", password: "543789" },
    ],
    isLoggedIn: false,
  };
  render() {
    const newUser = this.state.users.map((user) => {
      //   console.log(user);
      return (
        <h1 key={user.id}>
          ID: {user.id} Name: {user.name} Password: {user.password}
        </h1>
      );
    });
    return <Fragment>{newUser}</Fragment>;
  }
}

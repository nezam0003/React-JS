import React, { Component } from "react";
import { Consumer } from "./Context";
export default class GrandChild extends Component {
  render() {
    return (
      <div>
        <h2>Guest Component</h2>
        <Consumer>
          {({ data, clickHandle }) => (
            <>
              <h4>
                Name: {data.name} value : {data.value}
              </h4>
              <button onClick={clickHandle}>Change value</button>
            </>
          )}
        </Consumer>
      </div>
    );
  }
}

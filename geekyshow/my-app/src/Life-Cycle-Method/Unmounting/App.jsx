import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    console.log("App component did mount");
  }

  render() {
    console.log("app rendered");
    return (
      <div>
        <h1>Hello App component</h1>
      </div>
    );
  }
}

import React, { Component } from "react";
import ListView from "../list-view";
import TableView from "../table-view";

export default class Todos extends Component {
  state = {
    todos: [
      {
        id: "abd2",
        text: "coffee",
        description: "i want coffee",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "abd2gjir",
        text: "tea",
        description: "i want tea",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
  };

  toggleSelect = (todoId) => {
    console.log("hello selecet");
  };
  toggleComplete = (todoId) => {
    console.log("hello complete");
  };

  render() {
    return (
      <div>
        <h1 className="display-4 mb-5 text-center">My Todos</h1>
        <div className="mb-5">
          <ListView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <div>
          <TableView
            todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </div>
      </div>
    );
  }
}

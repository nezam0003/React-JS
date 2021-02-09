import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import shortid from "shortid";
import ListView from "../list-view";
import TableView from "../table-view";
import CreateTodoForm from "../todo-form/index";
import Controller from "../controllers/index";

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
    isOpenTodoForm: false,
    searchTerm: "",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };
  toggleForm = (e) => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };
  handleSearch = (e) => {
    console.log("search");
  };
  createToDo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  render() {
    return (
      <div>
        <h1 className="display-4 mb-5 text-center">My Todos</h1>
        <Controller
          term={this.state.searchTerm}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
        />
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
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>Create New Task</ModalHeader>
          <ModalBody>
            <CreateTodoForm createToDo={this.createToDo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

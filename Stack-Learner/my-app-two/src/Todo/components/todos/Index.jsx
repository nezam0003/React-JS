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
    view: "list",
    filter: "all",
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
  handleSearch = (value) => {
    this.setState({
      searchTerm: value,
    });
  };
  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
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

  handleFilter = (filter) => {
    this.setState({ filter });
  };
  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };
  changeView = (e) => {
    this.setState({
      view: e.target.value,
    });
  };
  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };
  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };
  reset = () => {
    this.setState({
      filter: "all",
      view: "list",
      searchTerm: "",
      isOpenTodoForm: false,
    });
  };
  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 mb-5 text-center">My Todos</h1>
        <Controller
          term={this.state.searchTerm}
          view={this.state.view}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
          changeView={this.changeView}
          handleFilter={this.handleFilter}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
        />
        <div className="mb-5">{this.getView()}</div>
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

import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

/********* Hooks ********/
// import App from "./Hooks/App";
// ReactDOM.render(<App />, document.getElementById("root"));

/******* Hooks - Chanllange-1 *****/
// import App from "./Hooks/Challange-1/App";
// ReactDOM.render(<App />, document.getElementById("root"));

/******* Hooks - Chanllange-2 *****/
// import App from "./Hooks/Challange-2/App";
// ReactDOM.render(<App />, document.getElementById("root"));

/******* Events Handling *****/
// import App from "./Events/BackgroundChange/App";
// ReactDOM.render(<App />, document.getElementById("root"));

/******* Events Handling *****/
// import App from "./Forms/Single-Data/App";
// ReactDOM.render(<App />, document.getElementById("root"));

/******* TO-DO project *****/
// import App from "./TO-DO/App";
// ReactDOM.render(<App />, document.getElementById("root"));

/******* Google-Keep-Clone project *****/
// import App from "./Google-Keep-Clone/App";
// ReactDOM.render(<App />, document.getElementById("root"));

/******* Google-Keep-Clone project *****/
// import App from "./Context-API/App";
// ReactDOM.render(<App />, document.getElementById("root"));

/******* React-Router *****/
import App from "./React-Router/App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

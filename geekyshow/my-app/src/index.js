/********* Rivison period *********/

import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

/************* State in React *********/
// import App from "./State/App";
// ReactDOM.render(<App />, document.getElementById("root"));

/************* Event in React *********/
// import App from "./Event/App";
// ReactDOM.render(<App />, document.getElementById("root"));

/************* Mounting in React *********/
// import App from "./Life-Cycle-Method/Mounting/App";
// ReactDOM.render(<App name="I am App Props" />, document.getElementById("root"));

/************* Updating in React *********/
// import App from "./Life-Cycle-Method/Updating/App";
// ReactDOM.render(<App name="I am App Props" />, document.getElementById("root"));

/************* Updating in React *********/
import App from "./Life-Cycle-Method/Unmounting/App";
import Student from "./Life-Cycle-Method/Unmounting/Student";
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Student />, document.getElementById("unmount"));
ReactDOM.unmountComponentAtNode(document.getElementById("unmount"));

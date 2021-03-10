import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container bg-dark text-light py-2">
        <h2 className="display-4 text-center">We are Learning React-Router</h2>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="container bg-dark text-light py-3">
      <h1 className="text-center">We Are Learning React Router</h1>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;

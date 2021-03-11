import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container bg-success text-light py-3">
        <Switch>
          <Route exact path="/" component={() => <Home name="Home" />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </>
  );
};

export default App;

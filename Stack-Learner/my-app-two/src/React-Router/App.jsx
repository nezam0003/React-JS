import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

import Navbar from "./Components/Navbar";
import Test from "./Components/Test";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container bg-dark text-light py-2">
        <h2 className="display-4 text-center">We are Learning React-Router</h2>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/posts/:postId" component={Test} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

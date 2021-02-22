import React from "react";
import { Button } from "reactstrap";
import classes from "./App.module.css";

const incrementCount = () => {
  console.log("clicked");
};

const App = () => {
  return (
    <div className={classes.mainContent}>
      <h1 className="display-3">0</h1>
      <Button color="success" onClick={incrementCount}>
        click me
      </Button>
    </div>
  );
};

export default App;

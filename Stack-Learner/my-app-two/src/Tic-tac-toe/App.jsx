import React from "react";
import Game from "./components/Game";
import classes from "./App.module.css";
const App = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className="display-4 text-center text-primary">Tic Tac Toe</h1>
      <Game />
    </div>
  );
};

export default App;

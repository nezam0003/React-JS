import React from "react";
import { Button } from "reactstrap";
import useMyCustomHooks from "./MyCustomHook";

const App = () => {
  const { count, increamentCounter } = useMyCustomHooks();
  return (
    <div>
      <h1>count Up: {count}</h1>
      <Button onClick={increamentCounter} color="success">
        Increament
      </Button>
    </div>
  );
};

export default App;

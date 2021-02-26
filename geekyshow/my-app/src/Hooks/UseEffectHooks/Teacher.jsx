import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const Teacher = () => {
  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(10);
  const increamentCounter = () => setCountUp(countUp + 1);
  const decreamentCounter = () => setCountDown(countDown - 1);
  useEffect(() => {
    console.log("Use Effect called");
  }, [countUp]);
  return (
    <>
      <div>
        <h1>Count Up: {countUp}</h1>
        <Button onClick={increamentCounter} color="success">
          Increament
        </Button>
      </div>
      <div>
        <h1>Count Down: {countDown}</h1>
        <Button onClick={decreamentCounter} color="danger">
          Decreament
        </Button>
      </div>
    </>
  );
};

export default Teacher;

import React, { useState } from "react";
import { Button } from "reactstrap";
import classes from "../App.module.css";

const RefreshTIme = () => {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  let intervalId = setInterval(() => {
    currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }, 1000);
  const stopWatch = () => {
    clearInterval(intervalId);
  };
  return (
    <div className={classes.mainContent}>
      <h1>{time}</h1>
      <Button onClick={stopWatch} color="warning">
        Stop Watch
      </Button>
    </div>
  );
};

export default RefreshTIme;

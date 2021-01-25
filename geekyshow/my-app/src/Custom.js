import { useState } from "react";
const useCustomCounter = () => {
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(20);
  const countUpFun = () => {
    setCount(count + 1);
  };
  const countDownFun = () => {
    setCountDown(countDown - 1);
  };
  return {
    count,
    countDown,
    countUpFun,
    countDownFun,
  };
};
export default useCustomCounter;

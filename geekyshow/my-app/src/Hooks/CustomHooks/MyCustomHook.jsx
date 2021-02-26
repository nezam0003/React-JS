import { useState } from "react";

const useMyCustomHooks = () => {
  const [count, setCount] = useState(0);
  const increamentCounter = () => setCount(count + 1);
  return {
    count,
    increamentCounter,
  };
};
export default useMyCustomHooks;

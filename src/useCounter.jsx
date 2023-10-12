// Challenge 5 
import { useState } from "react";

function useCounter(initiaValue = 0, step = 1) {
  const [count, setCount] = useState(initiaValue);

  function increment() {
    setCount(count + step);
  }
  function decrement() {
    setCount(count - step);
  }

  function reset() {
    setCount(initiaValue);
  }

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
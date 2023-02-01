import React, { useState } from "react";

const Counter = ({ initial = 0, min = 0, max = 16 }) => {
  const [count, setCount] = useState(initial);

  const incrementCount = () => {
    if (count >= max) {
      return;
    } else setCount(count + 1);
  };

  const decrementCount = () => {
    if (count <= min) {
      return;
    } else setCount(count - 1);
  };

  return (
    <>
      <div>Counter</div>
      <div data-testid="renderedCount">{count}</div>

      <button onClick={() => incrementCount()}>Increment</button>
      <button onClick={() => decrementCount()}>Decrement</button>
    </>
  );
};

export default Counter;

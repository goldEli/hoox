import React from "react";
import useCounter from "./useCounter";

interface IActionProps {}

const Action: React.FC<IActionProps> = (props) => {
  const { count, action } = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={action.sub}>-</button>
      <button onClick={action.add}>+</button>
    </div>
  );
};

export default Action;

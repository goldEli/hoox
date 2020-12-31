import React from "react";
import { createModel } from "../hoox";

function useCounter(): {
  count: number;
  action: {
    sub: () => void;
    add: () => void;
  };
} {
  const [count, setCount] = React.useState(0);

  const sub = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  const action = {
    sub,
    add
  };

  return { count, action };
}

export default createModel(useCounter);

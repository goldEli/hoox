import React from "react";
import Action from "./Action";
import Show from "./Show";

interface ICounterProps {}

const Counter: React.FC<ICounterProps> = (props) => {
  return (
    <div>
      <Show />
      <Action />
    </div>
  );
};

export default Counter;

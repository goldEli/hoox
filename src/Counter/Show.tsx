import React from "react";
import useCounter from "./useCounter";

interface IShowProps {}

const Show: React.FC<IShowProps> = (props) => {
  const { count } = useCounter();
  return <div>{count}</div>;
};

export default Show;

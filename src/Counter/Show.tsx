import React from "react";
import useCounter from "./useCounter";

interface IShowProps {}

const Show: React.FC<IShowProps> = (props) => {
  const { count } = useCounter();
  return (
    <div>
      <h3>Show Component:</h3>
      {count}
      <hr />
    </div>
  );
};

export default Show;

import React from "react";
import Container from "./container";
import SimulateComponent from "./SimulateComponent";
import render from "./render";
import { Hook } from "./type";

function createModel<T, P>(hook: Hook<T, P>, hookArg?: P) {
  const container = new Container<T>();
  render(
    <SimulateComponent
      hook={() => hook(hookArg)}
      update={(data) => {
        container.data = data;
        container.notify();
      }}
    />
  );
  function useModel(): T {
    const [state, setState] = React.useState<T>(container.data);

    React.useEffect(() => {
      function subscriber(data) {
        setState(data);
      }
      container.subScribers.add(subscriber);
      return () => {
        container.subScribers.delete(subscriber);
      };
    }, []);

    return state;
  }
  return useModel;
}

export default createModel;

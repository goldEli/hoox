import React from "react";
import Container from "./container";
import render from "./render";

function SimulateRender(props: { hook: any; update: any }) {
  const data = props.hook();
  props.update(data);

  return <></>;
}

function createModel(hook: any) {
  const container = new Container();
  // const data = hook();

  render(
    <SimulateRender
      hook={hook}
      update={(data) => {
        container.data = data;
        container.notify();
      }}
    />
  );
  function useModel() {
    const [state, setState] = React.useState(() => container.data);

    React.useEffect(() => {
      function subscriber(data) {
        setState(data);
      }
      container.subScribers.add(subscriber);
      return () => {
        container.subScribers.delete(subscriber);
      };
    }, [container]);

    return state;
  }
  return useModel;
}

export default createModel;

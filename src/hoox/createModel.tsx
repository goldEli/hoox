import React, { ReactElement } from "react";
import ReactDom from "react-dom";
import Container from "./container";

function SimulateRender(props: { hook: any; update: any }) {
  const data = props.hook();
  props.update(data);

  return <div></div>;
}

function render(Ele: ReactElement) {
  const container = document.createElement("div");
  document.body.append(container);
  ReactDom.render(Ele, container);
  // return <Ele></Ele>;
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

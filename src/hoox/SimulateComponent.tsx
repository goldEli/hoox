import React from "react";

function SimulateComponent(props: { hook: any; update: any }) {
  const data = props.hook();
  props.update(data);

  return <></>;
}

export default SimulateComponent;

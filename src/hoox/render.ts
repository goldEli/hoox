import React, { ReactElement } from "react";
import ReactDom from "react-dom";

function render(Ele: ReactElement) {
  const container = document.createElement("div");
  document.body.append(container);
  ReactDom.render(Ele, container);
}

export default render;

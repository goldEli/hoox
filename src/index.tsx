import * as React from "react";
import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
console.log(rootElement);
render(<App />, rootElement);
// render(<div>123</div>, rootElement);

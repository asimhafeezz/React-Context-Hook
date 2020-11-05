import React from "react";
import ReactDOM from "react-dom";
import ContextStore from "./indexProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ContextStore>
      <App />
    </ContextStore>
  </React.StrictMode>,
  rootElement
);

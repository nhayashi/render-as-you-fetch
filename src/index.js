import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import { ReactQueryConfigProvider } from "react-query";

import App from "./App";
import profileRender from "./profile-render";

const queryConfig = {
  shared: {
    suspense: true
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ReactQueryConfigProvider config={queryConfig}>
      <Profiler id="user" onRender={profileRender}>
        <App />
      </Profiler>
    </ReactQueryConfigProvider>
  </React.StrictMode>,
  rootElement
);

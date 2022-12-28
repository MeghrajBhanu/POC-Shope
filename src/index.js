import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import reducer from "./Store/Actions/reducer";
import { initialState } from "./Store/State/initialState";
import { StateProvider } from "./Store/State/StateProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

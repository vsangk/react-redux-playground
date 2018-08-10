import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { StoreState } from "./types";
import { Provider } from "react-redux";
import { CheckUpAction } from "./actions";
import App from "./components/App";
import { appState } from "./reducers";

const store = createStore<StoreState, CheckUpAction, null, null>(appState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();

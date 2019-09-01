import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleWare from "redux-thunk";
import App from "./components/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import reducers from "./Reducers/RootReducer";

const loggerMiddleWare = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleWare, loggerMiddleWare)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

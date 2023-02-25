import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const responses = (
  state = { feeling: 0, support: 0, understanding: 0, comments: "" },
  action
) => {
  () => {
    const newState = { ...state };
    switch (action.type) {
      case "ADD_FEELING":
        newState.feeling = action.payload;
        break;
      case "ADD_SUPPORT":
        newState.support = action.payload;
        break;
      case "ADD_UNDERSTANDING":
        newState.understanding = action.payload;
        break;
      case "ADD_COMMENTS":
        newState.comments = action.payload;
        break;
      case "ADD_FEELING":
        newState.feeling = action.payload;
    }
    return newState;
  };
  return state;
};

const storeInstance = createStore(
  combineReducers({
    responses,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={storeInstance} />
  </React.StrictMode>
);

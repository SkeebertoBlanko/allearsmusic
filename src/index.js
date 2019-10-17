import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Store from "./store/Store";
/**
 * @name Index.js
 * @author Schober Andreas
 * @const Index: wrap <Store> component around the rendered <App> component to provide the global state (for the query) to all components inside <App>
 *
 * @return: display footer
 */
const Index = () => {
  return (
    <Store>
      <App />
    </Store>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Youtube from "./Youtube";

function App() {
  return (
    <div>
      <Youtube />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

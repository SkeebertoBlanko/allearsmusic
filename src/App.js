import React, { Component, useEffect, useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";

import SpotifyOwn from "./SpotifyOwn";
import Youtube from "./Youtube";

/*TODO: displayDiv & dontDisplay */
let displayDiv = true;
let dontDisplay = false;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchinput: "" };
    this.state = { term: "" };
  }

  render() {
    return (
      <div>
        <SpotifyOwn />
        <Youtube />
      </div>
    );
  }
}
/** render Elements and Functions to create the Website */
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

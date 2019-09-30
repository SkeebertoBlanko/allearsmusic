import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Youtube from "./Youtube";

import Spotify2 from "./Spotify2";

function App() {
  return (
    <div>
      <div id="input_search" className="searchinput">
        <div className="searchconsole">
          <h1 className="m-2">
            Please enter the Artist or a Band you want to look up:
          </h1>
          <form className="input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="p-2 my-2 mx-auto rounded shadow-lg w-full"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="my-2 bg-blue-600 text-blue-100 p-2 rounded shadow-lg"
              /*TODO: onClick={displayDivSwap()} */
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div id="output_search" className="searchoutput">
        <Spotify2 />
        <Youtube />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

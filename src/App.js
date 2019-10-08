/**
 *
 * @author Schober Andreas
 * @version 1.0
 *
 * Needed Imports for the main App.js File like other React.Components or Libraries
 */

import React, { useContext } from "react";
import "./App.css";
import "./layout/Layout.css";

import Headergrid from "./layout/Headergrid";
import Bodygrid from "./layout/Bodygrid";
import Footergrid from "./layout/Footergrid";

import SpotifyOwn from "./SpotifyOwn";
import Youtube from "./Youtube";
import { SearchContext } from "./store/Store";

import Wikipedia from "./Wikipedia";

/**
 * Main Function of App.js where all Components are put together to create the finished website:
 */
const App = () => {
  const [query] = useContext(SearchContext);
  return (
    <div className="flex-container">
      {/* <Headergrid />
      <Bodygrid />
      <Footergrid />
      <div className="Spotify">
        <SpotifyOwn />
      </div>
      <div className="Youtube">
        <Youtube />
      </div>
      <h1>The query is {query}!!!!!!!!!!!!</h1> */}

      <Wikipedia />
    </div>
  );
};
export default App;

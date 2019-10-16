/**
 *
 * @author Schober Andreas
 * @version 1.0
 *
 * Needed Imports for the main App.js File like other React.Components or Libraries
 */

import React from "react";
import "./App.css";
import "./layout/Layout.css";

import Headergrid from "./layout/Headergrid";
import Bodygrid from "./layout/Bodygrid";
import Footergrid from "./layout/Footergrid";

/* import { SearchContext } from "./store/Store"; */

/* import SpotifyOwn from "./components/SpotifyOwn";
import Youtube from "./components/Youtube";
import Wikipedia from "./components/Wikipedia"; */

/**
 * @name App.js (Layout)
 * @author Schober Andreas
 * @const App: combine the needed layout components and provides the flex-container to create the website
 * @return: all needed components
 */
const App = () => {
  /* const [query] = useContext(SearchContext); */
  return (
    <div className="flex-container">
      <Headergrid />
      <Bodygrid />

      {/* <div className="Spotify">
        <SpotifyOwn />
      </div>
      <div className="Youtube">
        <Youtube />
      </div>
      <h1>The query is {query}!!!!!!!!!!!!</h1> 
      <Wikipedia />*/}

      <Footergrid />
    </div>
  );
};
export default App;

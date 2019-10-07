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

import { SearchContext } from "./store/Store";

import Querytest from "./Querytest";
/**
 * Main Function of App.js where all Components are put together to create the finished website:
 */
const App = () => {
  const [query, setQuery] = useContext(SearchContext);
  return (
    <div className="flex-container">
      {/* <Headergrid />
      <Bodygrid />
      <Footergrid /> */}
      <h1>The query is {query}!!!!!!!!!!!!</h1>
      <Querytest />
    </div>
  );
};
export default App;

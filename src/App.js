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





/**
 * Main Function of App.js where all Components are put together to create the finished website:
 */
function App() {
  return (
    <div className="flex-container">
      <Headergrid />
      <Bodygrid />
      <Footergrid />
    </div>
  );
}
export default App;

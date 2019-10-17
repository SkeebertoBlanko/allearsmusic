import React from "react";
import "./App.css";
import "./layout/Layout.css";

import Headergrid from "./layout/Headergrid";
import Bodygrid from "./layout/Bodygrid";
import Footergrid from "./layout/Footergrid";

/**
 * @name App.js (Layout)
 * @author Schober Andreas
 * @const App: combine the needed layout components and provides the flex-container to create the website, this file is besides the index.js the MainFile of the project
 * @return: the 3 layout components which contain the whole functionality of the website
 */
const App = () => {
  return (
    <div className="flex-container">
      <Headergrid />
      <Bodygrid />
      <Footergrid />
    </div>
  );
};
export default App;

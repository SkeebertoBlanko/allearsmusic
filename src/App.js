/**
 *
 * @author Schober Andreas
 * @version 1.0
 *
 * Needed Imports for the main App.js File like other React.Components or Libraries
 */

import React, { Component, useEffect, useState } from "react";
import "./App.css";

import SpotifyOwn from "./SpotifyOwn";
import Search from "./components/search";

import Youtube from "./Youtube";
import Form from "./components/form";
import List from "./components/list";

/**
 * Main Function of App.js where all Components are put together to create the finished website:
 */
function App() {
  return (
    <div>
      <List />
      <Form />
      <Search />
      <SpotifyOwn />
      <Youtube />
    </div>
  );
}
export default App;

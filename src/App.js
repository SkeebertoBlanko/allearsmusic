/**
 *
 * @author Schober Andreas
 * @version 1.0
 *
 * Needed Imports for the main App.js File like other React.Components or Libraries
 */

import React, { Component, useEffect, useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Spotify from "spotify-web-api-js";

{s
  /*const spotifyWebApi = new Spotify();*/
}
const bearerToken =
  "BQBTGhUMQ1RmM6tDzn5NM6c1JC5YIYeOVm8ADFCKWcDafD58WkavXAQLFLuIf_GT2mFm3WOtSyzzVlf81keFAlnYSaoIiO7jnd1Pc-PjDt9R2Q792tYA76dfED1rln6anCgUPBKoYeER-uNS6d1IFugA";


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

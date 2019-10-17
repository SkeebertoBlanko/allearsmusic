import React from "react";
import "../App.css";
import SpotifyOwn from "../components/SpotifyOwn";
import Youtube from "../components/Youtube";
import Wikipedia from "../components/Wikipedia";
import "./Layout.css";
/**
 * @name Bodygrid.js (Layout)
 * @author Schober Andreas
 * @const Bodygrid: combines the React Components to create the Layout for the Website
 *                 the Components contain all needed functionality and data needed
 * @return: all needed components
 */
const Bodygrid = () => {
  return (
    <>
      <div className="Body">
        <div className="Spotify ">
          <SpotifyOwn />
        </div>
        <div className="Youtube">
          <Youtube />
        </div>
        <div className="Wikipedia">
          <Wikipedia />
        </div>
      </div>
    </>
  );
};

export default Bodygrid;

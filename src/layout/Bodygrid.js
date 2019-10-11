import React from "react";
import "../App.css";
import SpotifyOwn from "../components/SpotifyOwn";
import Youtube from "../components/Youtube";
import Wikipedia from "../components/Wikipedia";
import "./Layout.css";
const Bodygrid = () => {
  return (
    <>
      <div className="Body">
        <div className="Spotify">
          <SpotifyOwn />
        </div>
        {/* <div className="Youtube">
          <Youtube />
        </div> */}
        <div className="Wikipedia">
          <Wikipedia />
        </div>
        <div></div>

        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Bodygrid;

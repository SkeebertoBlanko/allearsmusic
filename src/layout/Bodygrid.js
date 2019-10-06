import React from "react";
import "../App.css";
import SpotifyOwn from "../SpotifyOwn";
import Youtube from "../Youtube";
import "./Layout.css";
const Bodygrid = () => {

  return (
    <>
    <div className="Body">
        <div className="Spotify">
            <SpotifyOwn />
        </div>
        <div className="Youtube">
            <Youtube />
        </div>
        <div className="Wikipedia">

        </div>
        <div></div>
        
        <div></div> 
        <div></div>      
     </div>

      
    </>
  );
};

export default Bodygrid;
import React from "react";
import "../App.css";
import "./Layout.css";
/**
 * @name Headergrid.js (Layout)
 * @author Schober Andreas
 * @const Headergrid: containts all information of the header
 *
 * @return: display header
 */
const Headergrid = () => {
  return (
    <>
      <div className="Header m-3 tracking-widest">
        <h1>AllEarsMusicHeads</h1>
        <p>Searchengine for Spotify, Youtube and Wikipedia</p>
        <hr className="hr-white" />
        <hr />
        <hr className="hr-white mb-6" />
      </div>
    </>
  );
};

export default Headergrid;

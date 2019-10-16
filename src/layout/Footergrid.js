import React from "react";
import "../App.css";
import "./Layout.css";
/**
 * @name Footergrid.js (Layout)
 * @author Schober Andreas
 * @const Footergrid: containts all information of the footer
 *
 * @return: display footer
 */
const Footergrid = () => {
  return (
    <>
      <div className="Footer mt-10 text-center">
        <hr />
        <p>
          vocational school project "AllEarsMusicHeads"
          <br />
          <br />
          Searchengine for Spotify, Youtube and Wikipedia
          <br />
          <br />
          by
          <br />
          <br />
          Andreas Schober
        </p>
      </div>
    </>
  );
};

export default Footergrid;

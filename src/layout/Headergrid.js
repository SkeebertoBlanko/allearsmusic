import React from "react";
import "../App.css";
import List from "../components/list";
import Search from "../components/search";
import "./Layout.css";
const Headergrid = () => {

  return (
    <>
      <div className="Header">
          <List />
          <Search />
     </div>
    </>
  );
};

export default Headergrid;
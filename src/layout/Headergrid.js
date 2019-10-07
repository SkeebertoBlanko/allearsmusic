import React from "react";
import "../App.css";
import List from "../components/list";
import Search from "../components/search";
import "./Layout.css";
const Headergrid = () => {
  return (
    <>
      <div className="Header">
        <h1 className="m-2">
          Please enter the Artist or a Band you want to look up:
        </h1>
        <List />
        <Search />
      </div>
    </>
  );
};

export default Headergrid;

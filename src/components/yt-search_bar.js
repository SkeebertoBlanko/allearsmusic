import React, { useContext } from "react";
import { SearchContext } from "../store/Store";

function SearchBar() {
  const [query] = useContext(SearchContext);

  return (
    <div className="search-bar">
      <input value={query} onChange={function() {}} />
    </div>
  );
}

export default SearchBar;

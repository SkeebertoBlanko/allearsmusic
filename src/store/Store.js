import React, { useState } from "react";
export const SearchContext = React.createContext("");
/**
 * @name Store.js
 * @author Schober Andreas
 * @const Store: create a provider to provide the global query string and state to all files needed
 */
const Store = ({ children }) => {
  /**
   * @hook [query,setQuery] = global state to provide the search string for all input fields
   */
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={[query, setQuery]}>
      {children}
    </SearchContext.Provider>
  );
};

export default Store;

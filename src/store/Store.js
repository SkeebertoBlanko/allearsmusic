import React, { useState } from "react";

export const SearchContext = React.createContext("");

const Store = ({ children }) => {
  const [query, setQuery] = useState("Wu Tang");

  return (
    <SearchContext.Provider value={[query, setQuery]}>
      {children}
    </SearchContext.Provider>
  );
};

export default Store;

import React from "react";
export const initialState = { query: "" };

export const reducer = (state, action) => {
  switch (action.type) {
    case "setQuery":
      return { query: action.value };
    default:
      return state;
  }
};

export const Context = React.createContext();

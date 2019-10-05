/** FOR TESTING */
/** FOR TESTING */ /** FOR TESTING */
/** FOR TESTING */ /** FOR TESTING */
/** FOR TESTING */ /** FOR TESTING */
/** FOR TESTING */

import React, { Component, useContext } from "react";
import "../App.css";
import Context from "../store/context";

const Search = () => {
  const { state, actions } = useContext(Context);
  return (
    <React.Fragment>
      <form>
        <label for="searchinput">Searchinput</label>
        <input
          className="p-2 my-2 mx-auto rounded shadow-lg w-full"
          type="text"
          name="searchinput"
          value={state.value}
          onChange={e =>
            actions({
              type: "setState",
              payload: { ...state, value: e.target.value }
            })
          }
        />
      </form>
    </React.Fragment>
  );
};

export default Search;

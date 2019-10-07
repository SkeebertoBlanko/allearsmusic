/** FOR TESTING */
/** FOR TESTING */ /** FOR TESTING */
/** FOR TESTING */ /** FOR TESTING */
/** FOR TESTING */ /** FOR TESTING */
/** FOR TESTING */

import React, { useContext } from "react";
import "../App.css";
import Context from "../store/context";

const Search = () => {
  const { state, actions } = useContext(Context);
  return (
    <React.Fragment>
      <form>
        <label htmlFor="searchinput">Searchinput</label>
        <input
          className="p-2 my-2 mx-auto rounded shadow-lg w-3/5"
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
        <button
          type="submit"
          className="my-2 bg-indigo-700 text-blue-100 p-2 rounded shadow-lg"
        >
          Search
        </button>
      </form>
    </React.Fragment>
  );
};

export default Search;

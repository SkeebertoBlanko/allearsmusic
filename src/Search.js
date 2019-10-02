/** FOR TESTING */
/** FOR TESTING */ /** FOR TESTING */
/** FOR TESTING */ /** FOR TESTING */
/** FOR TESTING */ /** FOR TESTING */
/** FOR TESTING */

import React, { Component } from "react";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchinput: "" };
  }

  handleChange = event => {
    this.setState({ searchinput: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <label for="searchinput">Searchinput</label>
          <input
            type="text"
            name="searchinput"
            value={this.state.searchinput}
            onChange={this.handleChange}
          />
        </form>
      </React.Fragment>
    );
  }
}
export default Search;

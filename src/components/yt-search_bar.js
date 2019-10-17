import React from "react";
/**
 * @name yt-searc_bar.js (Youtube.js)
 * @author Schober Andreas
 * @class SearchBar: provides the functionallity of the search bar for the parent component Youtube
 * @return: all needed components and data
 */
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }

  /**
   * @function onInputChange(): set the search term to the current value of the input field
   * @param {Event} e
   */
  onInputChange(e) {
    this.setState({ term: e.target.value });
    this.props.onSearchTermChange(e.target.value);
  }

  render() {
    return (
      <span className="search-bar">
        <input
          className="p-2 my-2 mx-auto rounded shadow-lg w-3/5"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Search Youtube Videos"
        />
      </span>
    );
  }
}

export default SearchBar;

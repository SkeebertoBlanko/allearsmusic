import React, { Component } from "react";
import SearchBar from "./yt-search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./yt-video_list";
import VideoDetail from "./yt-video_details";
/**
 * @name Youtube.js
 * @author Schober Andreas
 * @class Yout: provides all needed states and constants for the look up at Youtube
 * @return: all needed components and found search results
 */
const API_KEY = "AIzaSyDr69Gto8ZjwPyvh8oslPW4lpfYw4Ql6O4";
class Yout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      isActive: false
    };
    this.addActiveClass = this.addActiveClass.bind(this);

    this.videoSearch("");
  }

  /**
   * @function addActiveClass(): needed to switch from not displaying to displaying the search results
   */
  addActiveClass() {
    this.setState({
      isActive: true
    });
  }

  /**
   * @function videoSearch(): fetch data from Youtube and provide the needed API_KEY
   * @param {searchTerm}
   */
  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div className="youtube bg-gray-100 rounded p-2 m-4 border-2 border-black">
        <h2>Youtube</h2>
        <form className="search-bar">
          <SearchBar
            className="w-3/5"
            onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
          />
          <button
            type="submit"
            className="my-2 bg-indigo-700 text-blue-100 p-2 rounded shadow-lg"
            onClick={this.addActiveClass}
          >
            Search
          </button>
        </form>
        <div
          className={
            this.state.isActive
              ? "bg-gray-100 rounded p-2 m-4 border-2 border-black"
              : "hidden"
          }
        >
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={userSelected =>
              this.setState({ selectedVideo: userSelected })
            }
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default Yout;

import React, { Component } from "react";
import SearchBar from "./yt-search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./yt-video_list";
import VideoDetail from "./yt-video_details";

const API_KEY = "AIzaSyAdfG9Dr9W9nKQ39TDpmBbjjSIqYMlOZPk";
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

  addActiveClass() {
    this.setState({
      isActive: true
    });
  }
  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div className="youtube">
        <SearchBar
          onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
        />
        <button onClick={this.addActiveClass}>Show</button>
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

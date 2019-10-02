import React, { Component } from "react";
import SearchBar from "./components/yt-search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/yt-video_list";
import VideoDetail from "./components/yt-video_details";
const API_KEY = "AIzaSyCb4ZV_6zpq8_d-GptL9jUwx7vpMWeIl1A";

class Yout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Wu tang");
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
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={userSelected =>
            this.setState({ selectedVideo: userSelected })
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default Yout;

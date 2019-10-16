import React, { Component } from "react";
import SearchBar from "./yt-search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./yt-video_list";
import VideoDetail from "./yt-video_details";

const API_KEY = "AIzaSyDr69Gto8ZjwPyvh8oslPW4lpfYw4Ql6O4";
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

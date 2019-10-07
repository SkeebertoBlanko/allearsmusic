import React, { Component } from "react";
import SearchBar from "./components/yt-search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/yt-video_list";
import VideoDetail from "./components/yt-video_details";
import Search from "./components/search";
import { Container } from "@material-ui/core";

const API_KEY = "AIzaSyDwOzEbE0yVZYDIJ3jen0sthQdb3Ct82AM";

class Yout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch(" ");
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
        <Container maxWidth="md">
          {/* <Search /> */}
          <SearchBar
            onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
          />
          <div className="bg-gray-100 p-2 rounded border-2 border-black">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={userSelected =>
                this.setState({ selectedVideo: userSelected })
              }
              videos={this.state.videos}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default Yout;

/* class Yout extends Component {
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
        <Search />
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

export default Yout; */
/* const Yout = () => {
  const { state, actions } = useContext(Context);

  return (
    <div className="youtube">
      <SearchBar
        onChange={e =>
          actions({
            type: "setState",
            payload: { ...state, value: e.target.value }
          })
        }
      />
      <VideoDetail video={state.selectedVideo} />
     
    </div>
  );
};

export default Yout;  */

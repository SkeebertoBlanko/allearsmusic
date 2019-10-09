import React, { useContext, useState } from "react";
import SearchBar from "./components/yt-search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/yt-video_list";
import VideoDetail from "./components/yt-video_details";
import Search from "./components/search";
import { Container } from "@material-ui/core";
const API_KEY = "AIzaSyDhrPe0PlzO3AunvP3m0Qwl4Hrz_bMN4yo";

function Yout(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideo] = useState(null);
  const videoSearch = searchTerm => {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      console.log(data);
      setVideos(data);
      setSelectedVideo(data[0]);
    });
  };

  return (
    <div className="youtube">
      <Container maxWidth="md">
        {/* <Search /> */}
        <SearchBar onSearchTermChange={searchTerm => videoSearch(searchTerm)} />
        <div className="bg-gray-100 p-2 mb-4 rounded border-2 border-black">
          <VideoDetail video={selectedVideos} />
          <VideoList
            onVideoSelect={userSelected => setVideos(userSelected)}
            videos={videos}
          />
        </div>
      </Container>
    </div>
  );
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

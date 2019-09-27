import React, { Component, useEffect, useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Spotify from "spotify-web-api-js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const spotifyWebApi = new Spotify();
const bearerToken =
  "BQDsLb2vn9QeHwJfbFag2d7bmOzVDUnJWOAR3CtHbkSj2YAq697WNQ5DT-qtjmLQ-wyXDYEv1bOq3KWJ9bYleLcsFG8yLqKWLPA10S8kvmEmJXaOV0Ja9p2PieIp58XuHKNqivSDhDdhZ5QsyFTGQz6y";

function App() {
  class Auth extends Component {
    constructor() {
      super();
      const params = this.getHashParams();
      this.state = {
        loggedIn: params.access_token ? true : false,
        nowPlaying: {
          name: "Not Checked",
          image: ""
        }
      };
      if (params.access_token) {
        spotifyWebApi.setAccessToken(params.access_token);
      }
    }
    getHashParams() {
      var hashParams = {};
      var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    getNowPlaying() {
      spotifyWebApi.getMyCurrentPlaybackState().then(response => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            image: response.item.album.images[0].url
          }
        });
      });
    }
  }
  const [query, setQuery] = useState("Eminem");
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetchArtists();
  }, []);

  function fetchArtists() {
    let url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setArtists(data.artists.items);
      });
    if (query == "") {
      alert("Bitte geben Sie etwas in das Suchfeld ein!");
    }
  }

  /* Submit entered Searchstring */

  function handleSubmit(e) {
    e.preventDefault();
    fetchArtists();
  }

  /* Inputfield for Searchstring */
  return (
    <div className="grid-container">
      <div id="input_search" className="searchconsole p-2">
        <h1 className="m-2">
          Please enter the Artist or a Band you want to look up:
        </h1>
        <form className="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-2 my-2 mx-auto rounded shadow-lg w-full"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="my-2 bg-blue-600 text-blue-100 p-2 rounded shadow-lg"
          >
            Search
          </button>
        </form>
      </div>
      {/* Search Output on Website */}
      <div id="output_search" className="searchoutput">
        <div className="spotify">
          <a href="http://localhost:8888">
            <Button variant="contained" color="primary">
              Login to Spotify
            </Button>
          </a>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.getNowPlaying()}
          >
            Get Now Playing
          </Button>
          <div> Now Playing: {this.state.nowPlaying.name} </div>
          <div>
            <img src={this.state.nowPlaying.image} style={{ width: 100 }} />
          </div>
          {artists.map((artist, index) => {
            const img = artist.images[0];
            const imgUrl = img ? img.url : "https://placekitten.com/g/200/200";

            return (
              console.log(artist) || (
                <div className="w-1/3 mb-10 text-center p-3" key={index}>
                  {
                    <img
                      className="rounded mb-3 text-center mx-auto"
                      src={imgUrl}
                      alt={artist.name}
                      width="400"
                    />
                  }
                  <h3>{artist.name}</h3>
                </div>
              )
            );
          })}
        </div>
        <div className="wikipedia"></div>
        <div className="picture"></div>
        <div className="youtube"></div>
        <div className="tabs"></div>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

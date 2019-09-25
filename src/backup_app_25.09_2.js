import React, { Component, useEffect, useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Spotify from "spotify-web-api-js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const spotifyWebApi = new Spotify();
const bearerToken =
  "BQCB4CrypQreaIIgdPSvPLJp-pt8WF1oSPVGnMdLM9Cz-diD4Y8MZaFKW48hN7VSE1pwM7JUdaB-eL3TvNl_5MDYXLU66b1XaBAQ3de7tSCTsXyBb3oLl4ygVXnooYcw8Faxx9VoIjsxAQSF4eVE5OV3";
class App extends Component {
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

  fetchArtists() {
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
  handleSubmit(e) {
    e.preventDefault();
    fetchArtists();
  }

  render() {
    return (
      <div>
        <a href="http://localhost:8888">
          <button>Login with Spotify</button>
        </a>
        <div> Now Playing: {this.state.nowPlaying.name} </div>
        <div>
          <img src={this.state.nowPlaying.image} style={{ width: 100 }} />
        </div>
        <button onClick={() => this.getNowPlaying()}>Check Now Playing</button>
        <br />
        <br />
      </div>
    );
  }
}
const [query, setQuery] = useState("Eminem");
const [artists, setArtists] = useState([]);
useEffect(() => {
  fetchArtists();
}, []);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

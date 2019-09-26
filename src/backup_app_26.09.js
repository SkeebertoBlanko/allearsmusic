import React, { Component, useEffect, useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Spotify from "spotify-web-api-js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { bool } from "prop-types";
import { tsConstructorType } from "@babel/types";

const spotifyWebApi = new Spotify();
let displayDiv = false;
let dontDisplay = false;

function App() {
  const params = getHashParams();
  const [query, setQuery] = useState(" ");
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchArtists();
  }, []);

  function getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  if (params.access_token) {
    spotifyWebApi.setAccessToken(params.access_token);
  } else {
    alert(
      "Du hast keinen AccessToken hinterlegt! Du wirst nun auf zum Spotify-Login weitergeleitet"
    );
    window.location.href = "http://localhost:8888/";
  }

  function fetchArtists() {
    let url = `https://api.spotify.com/v1/search?q=${query}&type=artist,album&limit=3`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${params.access_token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setArtists(data.artists.items);
        setAlbums(data.albums.items);
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

  function displayDivSwap() {
    if (displayDiv == false) {
      displayDiv = true;
    } else {
      displayDiv = false;
    }
  }

  /* Inputfield for Searchstring */
  return (
    <div className="grid-container">
      <div id="input_search" className="searchinput">
        <div className="searchconsole">
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
              onClick={displayDivSwap()}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {/* Search Output on Website */}
      <div id="output_search" className="searchoutput">
        <div className="spotify">
          {dontDisplay && (
            <div className="m-3">
              <a href="http://localhost:8888">
                <Button variant="contained" color="primary">
                  Login to Spotify
                </Button>
              </a>
            </div>
          )}

          {displayDiv && <h2 className="text-center mx-auto">Artists:</h2>}
          <div className="flex flex-wrap">
            {artists.map((artist, index) => {
              const img = artist.images[0];
              const artistURL = artist.external_urls.spotify;
              const imgUrl = img
                ? img.url
                : "https://placekitten.com/g/100/100";
              return (
                console.log(artist) || (
                  <div className="w-1/3 mb-10 text-center p-3" key={index}>
                    <a href={artistURL} alt={artistURL}>
                      {
                        <img
                          className="rounded mb-3 text-center mx-auto"
                          src={imgUrl}
                          alt={artist.name}
                          width="80"
                        />
                      }
                      <p>{artist.name}</p>
                    </a>
                    <br />
                  </div>
                )
              );
            })}
          </div>
          {displayDiv && <h2 className="text-center mx-auto">Albums:</h2>}
          <div className="flex flex-wrap">
            {albums.map((album, index) => {
              const imgAlbum = album.images[0];
              const albumURL = album.external_urls.spotify;
              const imgUrlAlbum = imgAlbum
                ? imgAlbum.url
                : "https://placekitten.com/g/100/100";
              return (
                console.log(albums) || (
                  <div className="w-1/3 mb-10 text-center p-3" key={index}>
                    <a href={albumURL} alt={albumURL}>
                      {
                        <img
                          className="rounded mb-3 text-center mx-auto"
                          src={imgUrlAlbum}
                          alt={album.name}
                          width="80"
                        />
                      }
                      <p>{album.name}</p>
                    </a>
                  </div>
                )
              );
            })}
          </div>
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

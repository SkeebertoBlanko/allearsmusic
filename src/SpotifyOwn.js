import React, { useState, useContext } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Spotify from "spotify-web-api-js";
import { Container } from "@material-ui/core";

import { SearchContext } from "./store/Store";

/**
 * SpotifyOwn() is the MainFunction for displaying and prozess the Spotify search
 *
 */
function SpotifyOwn() {
  /**
   * needed constants and variables for SpotifyOwn.js
   */
  const spotifyWebApi = new Spotify();
  const params = getHashParams();
  /*   const { state, actions } = useContext(Context); */
  const [query, setQuery] = useContext(SearchContext);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  /**
   * TODO: displayDiv & dontDisplay
   */
  let displayDiv = true;
  let dontDisplay = false;

  /**
   * function getHashParams() for the authorization of SpotifyLogin
   */
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
      "Du hast noch keinen Spotify-AccessToken hinterlegt, dieser wird für den Betrieb der Webseite benötigt! Du wirst nun auf zum Spotify-Login weitergeleitet"
    );
    window.location.href = "http://localhost:8888/";
  }

  /**
   * function fetchSpotifyArtists() for searching Spotify Artists and Albums
   */
  function fetchSpotifyArtists() {
    let url = `https://api.spotify.com/v1/search?q=${query}&type=artist,album&limit=4`;
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
  }

  /**
   *
   *
   */
  function handleSubmit(e) {
    e.preventDefault();
    fetchSpotifyArtists();
  }

  return (
    <div>
      {/**
       * Display the Searchinputfield
       *
       */}
      <div id="input_search" className="searchinput">
        <div className="searchconsole">
          <form className="" onSubmit={handleSubmit}>
            <input
              type="text"
              autoFocus
              className="p-2 my-2 mx-auto rounded shadow-lg w-3/5"
              value={query}
              onChange={e => setQuery(e.target.value)}
              name="searchinput"
            />
            <button
              type="submit"
              className="my-2 bg-indigo-700 text-blue-100 p-2 rounded shadow-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {/**
       *
       * hidden login for Spotify (needed if no authorization token is stored)
       */}
      <div className="spotify bg-gray-100 rounded p-2 mb-4 border-2 border-black">
        <h2 className="text-center mx-auto my-2 text-lg font-semibold tracking-widest">
          Spotify:
        </h2>
        {dontDisplay && (
          <div className="m-3">
            <a href="http://localhost:8888">
              <Button variant="contained" color="primary">
                Login to Spotify
              </Button>
            </a>
          </div>
        )}

        {/**
         * Displaying the found Artists of Spotify
         */}
        <Container maxWidth="md">
          <div
            id="spotify-artist"
            className="border-2 border-black m-2 bg-gray-300 rounded"
          >
            {displayDiv && (
              <h3 className="text-center mx-auto my-2 text-lg font-semibold tracking-wider">
                Artists:
              </h3>
            )}

            <div className="flex flex-wrap">
              {artists.map((artist, index) => {
                const img = artist.images[0];
                const artistURL = artist.external_urls.spotify;
                const imgUrl = img
                  ? img.url
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKquIPm6jfSmGvkb3yuOw9XsWEwpV7nKsJF9E1j67D8itgurl-";
                return (
                  console.log(artist) || (
                    <div className="w-1/2 mb-2 text-center p-1" key={index}>
                      <a
                        href={artistURL}
                        alt={artistURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {
                          <img
                            className="rounded mb-3 text-center mx-auto"
                            src={imgUrl}
                            alt={artist.name}
                            width="80"
                          />
                        }
                        <p className="text-sm">{artist.name}</p>
                      </a>
                      <br />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </Container>

        {/**
         * Displaying the found Albums of Spotify
         */}
        <Container maxWidth="md">
          <div
            id="spotify-album"
            className="border-2 border-black m-2 tracking-wider bg-gray-300 rounded"
          >
            {displayDiv && (
              <h3 className="text-center mx-auto my-2 text-lg font-semibold">
                Albums:
              </h3>
            )}
            <div className="flex flex-wrap">
              {albums.map((album, index) => {
                const imgAlbum = album.images[0];
                const albumURL = album.external_urls.spotify;
                const imgUrlAlbum = imgAlbum
                  ? imgAlbum.url
                  : "https://placekitten.com/g/100/100";
                return (
                  console.log(albums) || (
                    <div className="w-1/2 mb-2 text-center p-1" key={index}>
                      <a
                        href={albumURL}
                        alt={albumURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {
                          <img
                            className="rounded mb-3 text-center mx-auto"
                            src={imgUrlAlbum}
                            alt={album.name}
                            width="80"
                          />
                        }
                        <p className="text-sm">{album.name}</p>
                      </a>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
/**
 * render Elements and Functions to create the Website
 */

ReactDOM.render(<SpotifyOwn />, document.getElementById("root"));
export default SpotifyOwn;

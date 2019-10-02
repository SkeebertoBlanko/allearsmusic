import React, { Component, useEffect, useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Spotify from "spotify-web-api-js";
/*TODO: displayDiv & dontDisplay */
let displayDiv = true;
let dontDisplay = false;
/*** Main Function */
function SpotifyOwn() {
  /** needed constants and variables (globally)*/
  const spotifyWebApi = new Spotify();

  /*TODO: displayDiv & dontDisplay */
  let displayDiv = true;
  let dontDisplay = false;
  const params = getHashParams();
  const [query, setQuery] = useState(" ");
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetchSpotifyArtists();
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

  /*** FETCH */
  /** Spotify: function fetchSpotifyArtists() for searching Spotify Artists and Albums */
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

  /* Submit entered Searchstring */
  function handleSubmit(e) {
    e.preventDefault();
    fetchSpotifyArtists();
  }
  /**** Return the Basic Grid-Structure of the Website */
  return (
    <div>
      <div id="input_search" className="searchinput">
        <div className="searchconsole">
          <h1 className="m-2">
            Please enter the Artist or a Band you want to look up:
          </h1>
          <form className="" onSubmit={handleSubmit}>
            <input
              type="text"
              autoFocus
              className="p-2 my-2 mx-auto rounded shadow-lg w-full"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="my-2 bg-blue-600 text-blue-100 p-2 rounded shadow-lg"
              /*TODO: onClick={displayDivSwap()} */
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="spotify">
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

        {/* Displaying the found Artists of Spotify */}
        <div id="spotify-artist" className="border-2 border-gray-600 m-2">
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
                : "https://placekitten.com/g/100/100";
              return (
                console.log(artist) || (
                  <div className="w-1/2 mb-2 text-center p-1" key={index}>
                    <a href={artistURL} alt={artistURL} target="_blank">
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
        {/* Displaying the found Albums of Spotify */}
        <div
          id="spotify-album"
          className="border-2 border-gray-600 m-2 tracking-wider"
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
                    <a href={albumURL} alt={albumURL} target="_blank">
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
      </div>
    </div>
  );
}
/** render Elements and Functions to create the Website */
const rootElement = document.getElementById("root");
ReactDOM.render(<SpotifyOwn />, rootElement);
export default SpotifyOwn;

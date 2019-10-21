import React, { useState, useContext } from "react";
import "../App.css";
import ReactDOM from "react-dom";
import Spotify from "spotify-web-api-js";
import { Container } from "@material-ui/core";
import { SearchContext } from "../store/Store";

/**
 * @name SpotifyOwn.js (MainComponent)
 * @author Schober Andreas
 * @function SpotifyOwn(): is one of the two MainFunctions (besides App.js) for displaying and process the Spotify search
 *                         it also contains the input field for the global query string
 * @retrun the input field which contains the query string aswell as display the found artists and albums of Spotify
 */

function SpotifyOwn() {
  /**
   * @hooks [artists, setArtists], [albums, setAlbums], [switchDisplay, setswitchDisplay] to define constants and states for creating the Youtube component
   * @hook [query,setQuery] = global state to provide the search string for all input fields
   * @const spotifyWebApi: new Spotify instance
   * @const params: needed parameters from Spotify also used for authorization
   */
  const spotifyWebApi = new Spotify();
  const params = getHashParams();
  const [query, setQuery] = useContext(SearchContext);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [switchDisplay, setswitchDisplay] = useState(true);

  /**
   * @function getHashParams(): get needed parameters from Spotify also needed for authorization
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
   * @function fetchSpotifyArtists(): fetch API data for the look up of Spotify artists and albums
   */
  function fetchSpotifyArtists() {
    let url = `https://api.spotify.com/v1/search?q=${query}&type=artist,album&limit=6`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${params.access_token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setArtists(data.artists.items);
        setAlbums(data.albums.items);
      });
  }

  /**
   * @function changeDisplay(): switch state to display html on website after button click
   */
  function changeDisplay() {
    setswitchDisplay(false);
  }

  /**
   * @function handleSubmit(e): handle the submit and trigger the functions fetchSpotifyArtists(); and changeDisplay(); to display the data
   * @param {Event} e: triggers with an event (like onClick)
   */
  function handleSubmit(e) {
    e.preventDefault();
    fetchSpotifyArtists();
    changeDisplay();
  }

  return (
    <div className="bg-gray-100 rounded p-2 m-4 border-2 border-black">
      {/**
       * input field for query string
       */}
      <div id="input_search" className="searchinput">
        <div className="searchconsole">
          <h2>Spotify</h2>
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              autoFocus
              className="p-2 my-2 mx-auto rounded shadow-lg w-3/5"
              value={query}
              onChange={e => setQuery(e.target.value)}
              name="searchinput"
              placeholder="Search Spotify Artists and Albums"
            />
            <button
              type="submit"
              className="my-2 bg-indigo-700 text-blue-100 p-2 rounded shadow-lg"
            >
              Suche
            </button>
          </form>
        </div>
      </div>

      <div className={switchDisplay ? "hidden" : "spotify"}>
        {/**
         * display Spotify artists
         */}
        <Container maxWidth="md" className="my-3">
          <div
            id="spotify-artist"
            className="border-2 border-black m-2 tracking-wider bg-gray-300 rounded flex flex-wrap"
          >
            <h3 className="text-center mx-auto my-2 text-lg font-semibold tracking-wider">
              Artists:
            </h3>
            <div className="flex flex-wrap">
              {artists.map((artist, index) => {
                const img = artist.images[0];
                const artistURL = artist.external_urls.spotify;
                const imgUrl = img
                  ? img.url
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKquIPm6jfSmGvkb3yuOw9XsWEwpV7nKsJF9E1j67D8itgurl-";
                return (
                  console.log(artist) || (
                    <div
                      className="w-1/2 mb-3 text-center p-1 media flex"
                      key={index}
                    >
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
                            width="100"
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
         * display Spotify albums
         */}
        <Container maxWidth="md" className="my-3">
          <div
            id="spotify-album"
            className="border-2 border-black m-2 tracking-wider bg-gray-300 rounded flex flex-wrap"
          >
            <h3 className="text-center mx-auto my-2 text-lg font-semibold">
              Albums:
            </h3>
            <div className="flex flex-wrap">
              {albums.map((album, index) => {
                const imgAlbum = album.images[0];
                const albumURL = album.external_urls.spotify;
                const imgUrlAlbum = imgAlbum
                  ? imgAlbum.url
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKquIPm6jfSmGvkb3yuOw9XsWEwpV7nKsJF9E1j67D8itgurl-";
                return (
                  console.log(albums) || (
                    <div
                      className="w-1/2 mb-3 text-center p-1 media flex"
                      key={index}
                    >
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
                            width="100"
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

ReactDOM.render(<SpotifyOwn />, document.getElementById("root"));
export default SpotifyOwn;

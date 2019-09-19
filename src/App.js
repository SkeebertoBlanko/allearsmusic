import React, { Component, useEffect, useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Spotify from "spotify-web-api-js";

{
  /*const spotifyWebApi = new Spotify();*/
}
const bearerToken =
  "BQAbkiuf6tVi2viNx86mVAP6Je9NJFaxm3TCRo5R_gXsBe24xn4WXe_XEhCDNllT787PoONP8McQEmDANT4UGOfzYlsWUFYpIc9JjYqiTXCLhqiQpW8SklGTFtLQTKmOvq-7lZ40NI4ftTBZYBMqMv_e";

function App() {
  const [query, setQuery] = useState("eminem");
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
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchArtists();
  }

  return (
    <div className="min-h-screen bg-green-400 px-10 flex justify-center items-center flex-col">
      <h1 className="text-5x1 mb-10">Heading</h1>
      <form className="mb-10 flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 mr-2 rounded shadow-lg w-full"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-blue-100 py-2 px-8 rounded shadow-lg"
        >
          Search
        </button>
      </form>
      <div className="flex">
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
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";

{
  /*const spotifyWebApi = new Spotify();*/
}
const bearerToken =
  "BQCld1DnEvZ1b1xmaOEClXQVi0W1NIjZVh0kEOxBW6RO117GePMRdNWR_7BkcLxI_icHVBMp6YTBupmWcY316vJbk02PU3tKDGA1S-6rxBn85l6sVfphLlLf3TtavjLqQw6JoD5oWr3gg_EdzR8jajkT";

function Search() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetchArtists();
  }, []);

  function fetchArtists() {
    let url =
      "https://api.spotify.com/v1/search?q=alice%20in%20chains&type=artist";
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
}

/* Header/Body/Footer */
class Head extends Component {
  render() {
    return (
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AllEarsMusicHeads</title>
      </head>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <body>
        <Header />
        {/* <div className="grid-container">
          <div className="searchconsole">
            <form
              role="search"
              method="post"
              id="searchform"
              className="search-form"
              action="search.php"
            >
              <label htmlFor="search">Nach Künstler suchen:</label>
              <br />
              <input
                type="search"
                name="search"
                placeholder="Künstler eingeben"
                results="3"
              />
              <input type="submit" className="button-search" value="Suche" />
            </form>
          </div>
          <div className="wikipedia">
            <p>Wikipedia</p>
          </div>
          <div className="picture">
            <p>Picture</p>
          </div>
          <div className="spotify">
            <p>Spotify</p>
          </div>
          <div className="youtube">
            <p>Youtube</p>
          </div>
          <div className="tabs">
            <p>Tabs</p>
    </div>*/}
        <div className="spotify-login">
          <a href="http://localhost:8888/">
            <button>Spotify Login</button>
          </a>
        </div>
        <br />
        <br />
        {/*<div>
          {artist.map((artist, index) => (
            <div key={index}>
              <img src={artist.images[0].url} alt={artist.name} width="300" />
              <h3>{artist.name}</h3>
            </div>
          ))}
          </div>*/}
        {/*} <div>Now Playing: {this.state.nowPlaying.name}</div>
        <div>
          <img src={this.state.nowPlaying.image} style={{ width: 100 }} />
        </div>
  <button onClick={() => this.getNowPlaying()}>Check now Playing</button>*/}

        {/*</div>*/}
        <Footer />
      </body>
    );
  }
}

class Header extends Body {
  render() {
    return <p>Header</p>;
  }
}
class Footer extends Body {
  render() {
    return <p>Footer</p>;
  }
}

/*** MAIN-FUNCTION ***/
class App extends Component {
  render() {
    return (
      <>
        <Head> </Head>
        <Body> </Body>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";

const spotifyWebApi = new Spotify();

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
        <div class="spotify-login">
          <a href="http://localhost:8888/">
            <button>Spotify Login</button>
          </a>
        </div>
        <br />
        <br />
        <div>Now Playing: {this.state.nowPlaying.name}</div>
        <div>
          <img src={this.state.nowPlaying.image} style={{ width: 100 }} />
        </div>
        <button onClick={() => this.getNowPlaying()}>Check now Playing</button>
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

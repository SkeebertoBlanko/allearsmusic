import React, { Component } from "react";
import "./App.css";

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
        <div className="grid-container">
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
          </div>
        </div>
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

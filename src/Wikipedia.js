import React, { useState, useContext } from "react";
import "./App.css";
import { SearchContext } from "./store/Store";

function Wikipedia(props) {
  const [query, setQuery] = useContext(SearchContext);
  const [wikiSearchReturnValues, setwikiSearchReturnValues] = useState([]);
  const [WikiSearchTerms, setWikiSearchTerms] = useState(query);

  const useWikiSearchEngine = e => {
    e.preventDefault();

    setwikiSearchReturnValues([]);

    let url = "https:en.wikipedia.org/w/api.php";

    let params = {
      action: "query",
      list: "search",
      srsearch: WikiSearchTerms,
      format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(key => {
      url += "&" + key + "=" + params[key];
    });

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        for (var key in response.query.search) {
          setwikiSearchReturnValues({
            queryResultPageFullURL: "no link",
            queryResultPageID: response.query.search[key].pageid,
            queryResultPageTitle: response.query.search[key].title,
            queryResultPageSnippet: response.query.search[key].snippet
          });
        }
      })
      .then(function(response) {
        for (var key2 in wikiSearchReturnValues) {
          let page = wikiSearchReturnValues[key2];
          let pageID = page.queryResultPageID;
          let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

          fetch(urlForRetrievingPageURLByPageID)
            .then(function(response) {
              return response.json();
            })
            .then(function(response) {
              page.queryResultPageFullURL =
                response.query.pages[pageID].fullurl;

              /*  forceUpdate(); */
            });
        }
      });
  };

  const changeWikiSearchTerms = e => {
    setWikiSearchTerms(query);
  };

  let WikiSearchResults = [];

  for (var key3 in wikiSearchReturnValues) {
    setWikiSearchTerms(
      <div
        className="searchResultDiv border-2 border-black m-2 bg-gray-300 rounded"
        key={key3}
      >
        <a href={wikiSearchReturnValues[key3].queryResultPageFullURL}>
          <h3>{wikiSearchReturnValues[key3].queryResultPageTitle}</h3>
          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: wikiSearchReturnValues[key3].queryResultPageSnippet
            }}
          ></p>
        </a>
      </div>
    );
  }
  return (
    <div className="Wikipedia bg-gray-100 rounded p-2 border-2 border-black">
      <h2>Wikipedia</h2>
      <form action="">
        <input
          type="text"
          value={query}
          onChange={changeWikiSearchTerms}
          placeholder="Search Wikipeida Articles"
        />
        <button type="submit" onClick={useWikiSearchEngine}>
          Search
        </button>
      </form>
      {WikiSearchResults}
    </div>
  );
}

export default Wikipedia;

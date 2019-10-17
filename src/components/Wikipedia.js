import React, { useState, useContext, forceUpdate } from "react";
import { SearchContext } from "../store/Store";
import "../App.css";

/**
 * @name Wikipedia.js
 * @author Schober Andreas
 * @function Wikipedia(): contains all needed parameters (like React Hooks) to create the Wikipedia component
 *                   and it's functionallity
 *
 */
function Wikipedia() {
  /**
   * @hooks [WikiSearchTerms, setWikiSearchTerms], [wikiSearchReturnValues, setwikiSearchReturnValues] to define constants and states for creating the Youtube component
   *
   * @hook [query,setQuery] = global state to provide the search string for all input fields
   */
  const [query] = useContext(SearchContext);
  const [WikiSearchTerms, setWikiSearchTerms] = useState(query); // useState("query");
  const [wikiSearchReturnValues, setwikiSearchReturnValues] = useState([]);

  /**
   * @const useWikiSearchEngine: fetches all the data from the API and creates the needed URL
   * @param {Event} e: the functions and fetches inside useWikiSearchEngine are triggerd through the onClick event
   */
  const useWikiSearchEngine = e => {
    e.preventDefault();
    setwikiSearchReturnValues(query);

    var url = "https:en.wikipedia.org/w/api.php";

    var params = {
      action: "query",
      list: "search",
      srsearch: query,
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
        let temp = [];
        for (var key in response.query.search) {
          temp.push({
            queryResultPageFullURL: "no link",
            queryResultPageID: response.query.search[key].pageid,
            queryResultPageTitle: response.query.search[key].title,
            queryResultPageSnippet: response.query.search[key].snippet
          });
        }
        setwikiSearchReturnValues(temp);
      })
      .then(function(response) {
        for (var key2 in wikiSearchReturnValues) {
          let page = wikiSearchReturnValues[key2];
          let pageID = page.queryResultPageID;
          let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

          console.log("PAGE2: " + page);
          fetch(urlForRetrievingPageURLByPageID)
            .then(function(response) {
              return response.json();
            })

            .then(function(response) {
              page.queryResultPageFullURL =
                response.query.pages[pageID].fullurl;

              console.log("fullurl 2: " + response.query.pages[pageID].fullurl);
              console.log("fullurl page2.: " + page.queryResultPageFullURL);

              // pointerToThis.forceUpdate(); */
            });
        }
      });
  };

  /**
   * @const changeWikiSearchTerms: update search string
   */
  const changeWikiSearchTerms = () => {
    setWikiSearchTerms(query);
  };

  /**
   * create the output for the Wikipedia search results, which will be returned within WikiSearchResults
   */
  let WikiSearchResults = [];
  console.log("wikiSearchReturnValues 2: " + wikiSearchReturnValues);

  for (var key3 in wikiSearchReturnValues) {
    WikiSearchResults.push(
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
  /**
   * @return: the (hidden) input field and display the found search results
   */
  return (
    <div className="Wikipedia bg-gray-100 rounded p-2 border-2 border-black m-4">
      <h2>Wikipedia</h2>{" "}
      <form action="">
        <input
          type="text"
          value={query}
          onChange={changeWikiSearchTerms}
          placeholder="Search Wikipedia Articles"
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

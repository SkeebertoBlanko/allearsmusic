/*General CSS*/
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  background: lightgrey;
  width: 100%;
  height: 100%;
  margin: 0;
}

body > * {
  text-align: center;
  vertical-align: middle;
}

/*CSS for Grid*/
.grid-container {
  display: grid;
  grid-template-columns: 10px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 10px;
  grid-template-rows: 10px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 10px;
  border: 2px solid darkblue;
  margin-left: 5px;
  margin-right: 5px;
}

/* CSS for Searchconsole*/
.searchconsole {
  height: 100%;
  width: 100%;
  border: 2px solid green;

  grid-column-start: 5;
  grid-column-end: 13;
  grid-row-start: 2;
  grid-row-end: 3;
}

.searchoutput {
  height: 100%;
  width: 100%;
  border: 2px dashed red;
  grid-row-start: 4;
  grid-row-end: 32;
  grid-column-start: 2;
  grid-column-end: 16;
}
#search {
  border: 2px solid #999;
  border-radius: 0.5em;
  font-size: 1.2em;
  width: 90%;
  padding: 5px;
  margin: 5px;
  transition: width 0.5s ease-in-out;
}
#search:focus {
  border: 2px solid blue;
}

.button-search {
  height: auto;
  width: auto;
}

.spotify {
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;
  border: 2px solid darkmagenta;
}
/* .wikipedia {
  border: 2px solid darkred;
}
.picture {
  border: 2px solid darkgoldenrod;
}

.youtube {
  border: 2px solid pink;
}
.tabs {
  border: 2px solid darksalmon;
}
 */
.flex-basis-50 {
  flex-basis: 50%;
  min-width: 50%;
}

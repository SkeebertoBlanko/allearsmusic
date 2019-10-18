(window.webpackJsonpallearsmusic=window.webpackJsonpallearsmusic||[]).push([[0],{11:function(e,t,a){},25:function(e,t,a){e.exports=a(46)},30:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),i=(a(30),a(5),a(11),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Header m-3 tracking-widest"},r.a.createElement("h1",null,"AllEarsMusicHeads"),r.a.createElement("p",null,"Searchengine for Spotify, Youtube and Wikipedia"),r.a.createElement("hr",null)))}),s=a(6),o=a(21),u=a.n(o),m=a(56),d=r.a.createContext(""),h=function(e){var t=e.children,a=Object(n.useState)(""),l=Object(s.a)(a,2),c=l[0],i=l[1];return r.a.createElement(d.Provider,{value:[c,i]},t)};function p(){var e=new u.a,t=function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(;e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t}(),a=Object(n.useContext)(d),l=Object(s.a)(a,2),c=l[0],i=l[1],o=Object(n.useState)([]),h=Object(s.a)(o,2),p=h[0],b=h[1],g=Object(n.useState)([]),f=Object(s.a)(g,2),v=f[0],E=f[1],y=Object(n.useState)(!0),k=Object(s.a)(y,2),w=k[0],S=k[1];return t.access_token?e.setAccessToken(t.access_token):(alert("Du hast noch keinen Spotify-AccessToken hinterlegt, dieser wird f\xfcr den Betrieb der Webseite ben\xf6tigt! Du wirst nun auf zum Spotify-Login weitergeleitet"),window.location.href="http://localhost:8888"),r.a.createElement("div",{className:"bg-gray-100 rounded p-2 m-4 border-2 border-black"},r.a.createElement("div",{id:"input_search",className:"searchinput"},r.a.createElement("div",{className:"searchconsole"},r.a.createElement("h2",null,"Spotify"),r.a.createElement("form",{className:"search-bar",onSubmit:function(e){e.preventDefault(),function(){var e="https://api.spotify.com/v1/search?q=".concat(c,"&type=artist,album&limit=6");fetch(e,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.access_token)}}).then((function(e){return e.json()})).then((function(e){b(e.artists.items),E(e.albums.items)}))}(),S(!1)}},r.a.createElement("input",{type:"text",autoFocus:!0,className:"p-2 my-2 mx-auto rounded shadow-lg w-3/5",value:c,onChange:function(e){return i(e.target.value)},name:"searchinput",placeholder:"Search Spotify Artists and Albums"}),r.a.createElement("button",{type:"submit",className:"my-2 bg-indigo-700 text-blue-100 p-2 rounded shadow-lg"},"Suche")))),r.a.createElement("div",{className:w?"hidden":"spotify"},r.a.createElement(m.a,{maxWidth:"md",className:"my-3"},r.a.createElement("div",{id:"spotify-artist",className:"border-2 border-black m-2 tracking-wider bg-gray-300 rounded flex flex-wrap"},r.a.createElement("h3",{className:"text-center mx-auto my-2 text-lg font-semibold tracking-wider"},"Artists:"),r.a.createElement("div",{className:"flex flex-wrap"},p.map((function(e,t){var a=e.images[0],n=e.external_urls.spotify,l=a?a.url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKquIPm6jfSmGvkb3yuOw9XsWEwpV7nKsJF9E1j67D8itgurl-";return console.log(e)||r.a.createElement("div",{className:"w-1/2 mb-3 text-center p-1",key:t},r.a.createElement("a",{href:n,alt:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"rounded mb-3 text-center mx-auto",src:l,alt:e.name,width:"80"}),r.a.createElement("p",{className:"text-sm"},e.name)),r.a.createElement("br",null))}))))),r.a.createElement(m.a,{maxWidth:"md",className:"my-3"},r.a.createElement("div",{id:"spotify-album",className:"border-2 border-black m-2 tracking-wider bg-gray-300 rounded flex flex-wrap"},r.a.createElement("h3",{className:"text-center mx-auto my-2 text-lg font-semibold"},"Albums:"),r.a.createElement("div",{className:"flex flex-wrap"},v.map((function(e,t){var a=e.images[0],n=e.external_urls.spotify,l=a?a.url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKquIPm6jfSmGvkb3yuOw9XsWEwpV7nKsJF9E1j67D8itgurl-";return console.log(v)||r.a.createElement("div",{className:"w-1/2 mb-3 text-center p-1",key:t},r.a.createElement("a",{href:n,alt:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"rounded mb-3 text-center mx-auto",src:l,alt:e.name,width:"80"}),r.a.createElement("p",{className:"text-sm"},e.name)))})))))))}c.a.render(r.a.createElement(p,null),document.getElementById("root"));var b=p,g=a(7),f=a(2),v=a(8),E=a(9),y=a(1),k=a(10),w=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={term:""},a.onInputChange=a.onInputChange.bind(Object(y.a)(a)),a}return Object(k.a)(t,e),Object(f.a)(t,[{key:"onInputChange",value:function(e){this.setState({term:e.target.value}),this.props.onSearchTermChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("span",{className:"search-bar"},r.a.createElement("input",{className:"p-2 my-2 mx-auto rounded shadow-lg w-3/5",value:this.state.term,onChange:this.onInputChange,placeholder:"Search Youtube Videos"}))}}]),t}(r.a.Component),S=a(23),N=a.n(S),x=function(e){var t=e.video,a=e.onUserSelected,n=t.snippet.thumbnails.medium.url;return r.a.createElement("li",{onClick:function(){return a(t)},className:"list-group-item"},r.a.createElement("span",{className:"video-list media flex"},r.a.createElement("div",{className:"w-1/3"},r.a.createElement("img",{src:n,alt:t.snippet.title})),r.a.createElement("div",{className:"w-2/3"},r.a.createElement("div",{className:"yt-list-title"},t.snippet.title))))},j=function(e){var t=e.videos.map((function(t){return r.a.createElement(x,{onUserSelected:e.onVideoSelect,key:t.etag,video:t})}));return r.a.createElement("ul",{className:"list-group"},t)},O=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");var a=t.id.videoId,n="https://www.youtube.com/embed/".concat(a);return r.a.createElement("div",{className:"video-detail"},r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{className:"embed-responsive-itemn rounded",src:n,title:t.snippet.title})),r.a.createElement("div",{className:"details my-0 bg-gray-500"},r.a.createElement("div",null,t.snippet.title)))},R=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={videos:[],selectedVideo:null,isActive:!1},a.addActiveClass=a.addActiveClass.bind(Object(y.a)(a)),a.videoSearch(""),a}return Object(k.a)(t,e),Object(f.a)(t,[{key:"addActiveClass",value:function(){this.setState({isActive:!0})}},{key:"videoSearch",value:function(e){var t=this;N()({key:"AIzaSyDgM3087-KiceH8EbAgdmsw311gmMBfVwk",term:e},(function(e){t.setState({videos:e,selectedVideo:e[0]})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"youtube bg-gray-100 rounded p-2 pb-6 m-4 border-2 border-black"},r.a.createElement("h2",null,"Youtube"),r.a.createElement("form",{className:"search-bar"},r.a.createElement(w,{className:"w-3/5",onSearchTermChange:function(t){return e.videoSearch(t)}}),r.a.createElement("button",{type:"submit",className:"my-2 bg-indigo-700 text-blue-100 p-2 rounded shadow-lg",onClick:this.addActiveClass},"Suche")),r.a.createElement("div",{className:this.state.isActive?"bg-gray-100 rounded p-2 m-4 border-2 border-black":"hidden"},r.a.createElement(O,{video:this.state.selectedVideo}),r.a.createElement(j,{onVideoSelect:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos})))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).useWikiSearchEngine=function(e){e.preventDefault(),a.setState({wikiSearchReturnValues:[]});var t=Object(y.a)(a),n="https:en.wikipedia.org/w/api.php",r={action:"query",list:"search",srsearch:a.state.WikiSearchTerms,format:"json"};n+="?origin=*",Object.keys(r).forEach((function(e){n+="&"+e+"="+r[e]})),fetch(n).then((function(e){return e.json()})).then((function(e){for(var a in e.query.search)t.state.wikiSearchReturnValues.push({queryResultPageFullURL:"no link",queryResultPageID:e.query.search[a].pageid,queryResultPageTitle:e.query.search[a].title,queryResultPageSnippet:e.query.search[a].snippet})})).then((function(e){var a=function(){var e=t.state.wikiSearchReturnValues[n],a=e.queryResultPageID,r="https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=".concat(a,"&inprop=url&format=json");console.log("PAGE: "+e),fetch(r).then((function(e){return e.json()})).then((function(n){e.queryResultPageFullURL=n.query.pages[a].fullurl,console.log("fullurl: "+n.query.pages[a].fullurl),console.log("fullurl page.: "+e.queryResultPageFullURL),t.forceUpdate()}))};for(var n in t.state.wikiSearchReturnValues)a()}))},a.changeWikiSearchTerms=function(e){a.setState({WikiSearchTerms:e.target.value})},a.state={wikiSearchReturnValues:[],WikiSearchTerms:""},a}return Object(k.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=[];for(var t in console.log("wikiSearchReturnValues: "+this.state.wikiSearchReturnValues),this.state.wikiSearchReturnValues)e.push(r.a.createElement("div",{className:"searchResultDiv border-2 border-black m-2 bg-gray-300 rounded",key:t},r.a.createElement("a",{href:this.state.wikiSearchReturnValues[t].queryResultPageFullURL,target:"blank"},r.a.createElement("h3",null,this.state.wikiSearchReturnValues[t].queryResultPageTitle),r.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:this.state.wikiSearchReturnValues[t].queryResultPageSnippet}}))));return r.a.createElement("div",{className:"Wikipedia bg-gray-100 rounded p-2 m-4 border-2 border-black"},r.a.createElement("h2",null,"Wikipedia"),r.a.createElement("form",{className:"search-bar"},r.a.createElement("input",{type:"text",className:"p-2 my-2 mx-auto rounded shadow-lg w-3/5",value:this.state.WikiSearchTerms||"",onChange:this.changeWikiSearchTerms,placeholder:"Search Wikipedia Articles"}),r.a.createElement("button",{className:"my-2 bg-indigo-700 text-blue-100 p-2 rounded shadow-lg",type:"submit",onClick:this.useWikiSearchEngine},"Suche")),e)}}]),t}(r.a.Component),A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Body"},r.a.createElement("div",{className:"Spotify "},r.a.createElement(b,null)),r.a.createElement("div",{className:"Youtube"},r.a.createElement(R,null)),r.a.createElement("div",{className:"Wikipedia"},r.a.createElement(q,null))))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Footer mt-10 text-center"},r.a.createElement("hr",null),r.a.createElement("p",null,'vocational school project "AllEarsMusicHeads"',r.a.createElement("br",null),r.a.createElement("br",null),"Searchengine for Spotify, Youtube and Wikipedia",r.a.createElement("br",null),r.a.createElement("br",null),"by",r.a.createElement("br",null),r.a.createElement("br",null),"Andreas Schober")))},V=function(){return r.a.createElement("div",{className:"flex-container"},r.a.createElement(i,null),r.a.createElement(A,null),r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(h,null,r.a.createElement(V,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){}},[[25,1,2]]]);
//# sourceMappingURL=main.8b374b9b.chunk.js.map
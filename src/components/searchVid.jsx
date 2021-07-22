import React, { Component } from "react";

fetch(`https://youtube.googleapis.com/youtube/v3/search?key={API}&part=snippet&maxResults=25&q=bts`)
  .then((res) => res.json())
  .then((data) => console.log(data.items.map((item) => item.snippet.title)));

class SearchVid extends Component {
  render() {
    return <div></div>;
  }
}

export default SearchVid;

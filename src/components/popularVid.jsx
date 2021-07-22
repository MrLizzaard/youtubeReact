import React, { Component } from "react";

fetch(`https://youtube.googleapis.com/youtube/v3/videos?key=[API]&part=snippet&chart=mostPopular&maxResults=25&regionCode=KR`)
  .then((res) => res.json())
  .then((data) => console.log(data));

class PopularVid extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default PopularVid;

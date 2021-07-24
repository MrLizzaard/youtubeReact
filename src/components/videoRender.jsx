import React, { Component } from "react";

class VideoRender extends Component {
  render() {
    const url = `https://www.youtube.com/embed/${this.props.id}`;
    return (
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
  }
}

export default VideoRender;

import React, { Component } from "react";

class VideoPage extends Component {
  render() {
    const data = this.props.data[0];
    console.log(data);
    const url = `https://www.youtube.com/embed/${data.id}`;
    return (
      <div className="video__render-main">
        <div className="video__render-left">
          <iframe
            className="video__render-video"
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <ul className="video__render-hashtags">
            {data.snippet.tags.map((item) => {
              return <li className="video__render-hashtag">#{item}</li>;
            })}
          </ul>
          <div className="video__render-title">{data.snippet.title}</div>
          <div className="video__render-channel">{data.snippet.channelTitle}</div>
          <div className="video__render-description">{data.snippet.description}</div>
        </div>
        <div className="video__render-right">recommand videos</div>
      </div>
    );
  }
}

export default VideoPage;

import React, { Component } from "react";
import SidebarVid from "./sidebarVid";

class VideoPage extends Component {
  handleVideoClick = (data) => {
    this.props.onVideoClick(data);
  };

  render() {
    const data = this.props.data[0];
    const tags = [];
    const url = `https://www.youtube.com/embed/${data.id}`;

    for (let i = 0; i < 3; i++) {
      if (data.snippet.tags[i] === undefined) break;
      tags.push(data.snippet.tags[i]);
    }

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
            {tags &&
              tags.map((item) => {
                return (
                  <li key={tags.indexOf(item)} className="video__render-hashtag">
                    #{item}
                  </li>
                );
              })}
          </ul>
          <div className="video__render-title">{data.snippet.title}</div>
          <div className="video__render-channel">{data.snippet.channelTitle}</div>
          <div className="video__render-description">{data.snippet.description}</div>
        </div>
        <div className="video__render-right">
          <SidebarVid onVideoClick={this.handleVideoClick} />
        </div>
      </div>
    );
  }
}

export default VideoPage;

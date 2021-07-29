import React, { Component } from "react";
import PopularVid from "./popularVid";
import SearchVid from "./searchVid";

class VideoContainer extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <>
        {this.state.search ? (
          <SearchVid onVideoClick={this.props.onVideoClick}></SearchVid>
        ) : (
          <PopularVid onVideoClick={this.props.onVideoClick}></PopularVid>
        )}
      </>
    );
  }
}

export default VideoContainer;

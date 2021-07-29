import React, { Component } from "react";
import PopularVid from "./popularVid";
import SearchVid from "./searchVid";

class VideoContainer extends Component {
  state = {
    value: "",
  };

  render() {
    return (
      <>
        {this.state.value ? (
          <SearchVid onVideoClick={this.props.onVideoClick} searchValue={this.state.value}></SearchVid>
        ) : (
          <PopularVid onVideoClick={this.props.onVideoClick}></PopularVid>
        )}
      </>
    );
  }
}

export default VideoContainer;

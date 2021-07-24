import React, { Component } from "react";
import PopularVid from "./popularVid";
import VideoRender from "./videoRender";

class MainBody extends Component {
  state = {
    id: "",
  };

  handleVideoClick = (item) => {
    this.setState({ id: item });
  };

  render() {
    return (
      <div className="mainBody">
        {this.state.id ? <VideoRender id={this.state.id} /> : <PopularVid onVideoClick={this.handleVideoClick}></PopularVid>}
      </div>
    );
  }
}

export default MainBody;

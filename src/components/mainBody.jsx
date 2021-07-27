import React, { Component } from "react";
import PopularVid from "./popularVid";
import VideoPage from "./videoPage";

class MainBody extends Component {
  state = {
    data: "",
  };

  handleVideoClick = (data) => {
    this.setState({ data });
  };

  render() {
    return (
      <div className="mainBody">
        {this.state.data ? <VideoPage data={this.state.data} /> : <PopularVid onVideoClick={this.handleVideoClick}></PopularVid>}
      </div>
    );
  }
}

export default MainBody;

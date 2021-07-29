import React, { Component } from "react";
import VideoContainer from "./videoContainer";
import VideoPage from "./videoPage";

class MainBody extends Component {
  state = {
    data: "",
  };

  videoClickHandler = (data) => {
    this.setState({ data });
  };

  render() {
    return (
      <div className="mainBody">
        {this.state.data ? (
          <VideoPage data={this.state.data} onVideoClick={this.videoClickHandler} />
        ) : (
          <VideoContainer searchValue={this.props.searchValue} onVideoClick={this.videoClickHandler}></VideoContainer>
        )}
      </div>
    );
  }
}

export default MainBody;

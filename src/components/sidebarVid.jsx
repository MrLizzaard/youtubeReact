import React, { Component } from "react";
import * as config from "/Users/A/Desktop/web/React/youtube/src/config";

class SidebarVid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  callApi = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?key=${config.APIKEY}&part=snippet&chart=mostPopular&maxResults=25&regionCode=KR`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          key: 1,
          data: data.items,
        });
      });
  };

  handleClick = (e) => {
    const data = this.state.data.filter((item) => item.id === e.target.dataset.id);
    this.props.onVideoClick(data);
  };

  componentDidMount() {
    this.callApi();
  }

  render() {
    console.log(this.state.data);
    return (
      <ul className="sideVideo__card">
        {this.state.data
          ? this.state.data.map((item) => (
              <li className="sideVideo__card-list" key={item.id}>
                <img
                  src={item.snippet.thumbnails.default.url}
                  alt={item.id}
                  data-id={item.id}
                  className="sideVideo__card-thumbnail"
                  onClick={this.handleClick}
                />
                <div className="sideVideo__card_info">
                  <div className="sideVideo__card-title" data-id={item.id} onClick={this.handleClick}>
                    {item.snippet.title}
                  </div>
                  <div className="sideVideo__card-channel" data-id={item.id} onClick={this.handleClick}>
                    {item.snippet.channelTitle}
                  </div>
                </div>
              </li>
            ))
          : "Loading..."}
      </ul>
    );
  }
}

export default SidebarVid;

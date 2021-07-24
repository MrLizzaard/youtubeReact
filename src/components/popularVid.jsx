import React, { Component } from "react";
import * as config from "/Users/A/Desktop/web/React/youtube/src/config";

class PopularVid extends Component {
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
          data,
        });
        console.log(data.items);
      });
  };

  handleClick = (e) => {
    this.props.onVideoClick(e.target.alt);
  };

  componentDidMount() {
    this.callApi();
  }

  render() {
    return (
      <ul className="video__card">
        {this.state.data
          ? this.state.data.items.map((item) => (
              <li className="video__card-list" key={item.id}>
                <img src={item.snippet.thumbnails.medium.url} alt={item.id} className="video__card-thumbnail" onClick={this.handleClick} />
                <div className="video__card_info">
                  <div className="video__card-title">{item.snippet.title}</div>
                  <div className="video__card-channel">{item.snippet.channelTitle}</div>
                  <div className="video__card-description">{item.snippet.description}</div>
                </div>
              </li>
            ))
          : "Loading..."}
      </ul>
    );
  }
}

export default PopularVid;

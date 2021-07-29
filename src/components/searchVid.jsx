import React, { Component } from "react";
import * as config from "/Users/A/Desktop/web/React/youtube/src/config";

class SearchVid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  callApi = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${config.APIKEY}&part=snippet&maxResults=25&q=${this.props.searchValue}`)
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
      <ul className="video__card">
        {this.state.data
          ? this.state.data.map((item) => (
              <li className="video__card-list" key={item.id}>
                <img
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.id}
                  data-id={item.id}
                  className="video__card-thumbnail"
                  onClick={this.handleClick}
                />
                <div className="video__card_info">
                  <div className="video__card-title" data-id={item.id} onClick={this.handleClick}>
                    {item.snippet.title}
                  </div>
                  <div className="video__card-channel" data-id={item.id} onClick={this.handleClick}>
                    {item.snippet.channelTitle}
                  </div>
                  <div className="video__card-description" data-id={item.id} onClick={this.handleClick}>
                    {item.snippet.description}
                  </div>
                </div>
              </li>
            ))
          : "Loading..."}
      </ul>
    );
  }
}

export default SearchVid;

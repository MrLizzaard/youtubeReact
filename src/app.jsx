import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./app.css";
import MainBody from "./components/mainBody";

class App extends Component {
  state = {
    value: "",
  };

  searchHandler = (value) => {
    this.setState({ value });
  };

  logoClick = () => {
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="container">
        <Navbar onSearch={this.searchHandler} onLogoClick={this.logoClick} />
        <MainBody searchValue={this.state.value}></MainBody>
      </div>
    );
  }
}

export default App;

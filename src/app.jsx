import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./app.css";
import MainBody from "./components/mainBody";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar onSearch={this.searchHandler} />
        <MainBody></MainBody>
      </div>
    );
  }
}

export default App;

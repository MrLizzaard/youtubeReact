import React, { Component } from "react";
import Navbar from "./components/navbar";

import "./app.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div>Hello World!</div>
      </>
    );
  }
}

export default App;

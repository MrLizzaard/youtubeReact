import React, { Component } from "react";

class Navbar extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-leaf"></i>
        <span className="navbar_name">Habit Tracker</span>
        <span className="navbar_count">{this.state.count}</span>
      </div>
    );
  }
}

export default Navbar;

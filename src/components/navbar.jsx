import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <i className="fas fa-leaf"></i>
        <span className="navbar_name">Habit Tracker</span>
        <span className="navbar_count">{this.props.count}</span>
      </nav>
    );
  }
}

export default Navbar;

import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <a href="http://localhost:3000/" className="navbar__icon">
          <i className="fab fa-youtube"></i>
          <span className="navbar__title">Youtube</span>
        </a>
        <div className="navbar__input__container">
          <input className="navbar__input" type="text" placeholder="Search.." />
          <button className="navbar__search">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;

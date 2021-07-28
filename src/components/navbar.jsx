import React, { useRef } from "react";

function Navbar() {
  const inputText = new useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText.current.focus());
  };
  return (
    <div className="navbar">
      <a href="http://localhost:3000/" className="navbar__icon">
        <i className="fab fa-youtube"></i>
        <span className="navbar__title">Youtube</span>
      </a>
      <div className="navbar__input__container">
        <form ref={inputText} onSubmit={handleSubmit}>
          <input className="navbar__input" type="text" placeholder="Search.." />
          <button type="submit" className="navbar__search">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;

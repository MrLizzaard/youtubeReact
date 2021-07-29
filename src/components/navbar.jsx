import React, { memo } from "react";

const Navbar = memo((props) => {
  const formRef = React.createRef();
  const inputText = React.createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputText.current.value;
    name && props.onSearch(name);
    formRef.current.reset();
  };
  return (
    <div className="navbar">
      <a href="http://localhost:3000/" className="navbar__icon">
        <i className="fab fa-youtube"></i>
        <span className="navbar__title">Youtube</span>
      </a>
      <div className="navbar__input__container">
        <form ref={formRef} onSubmit={handleSubmit}>
          <input ref={inputText} className="navbar__input" type="text" placeholder="Search.." />
          <button type="submit" className="navbar__search">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
});

export default Navbar;

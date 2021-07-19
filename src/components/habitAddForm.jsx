import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAppend(name);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <input ref={this.inputRef} className="add-input" type="text" placeholder="Habits..." />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default HabitAddForm;

import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAppend(name);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
      <input ref={inputRef} className="add-input" type="text" placeholder="Habits..." />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
});

export default HabitAddForm;

import React, { useState } from "react";

const TasksForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      addTask(value);
      setValue("");
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="TasksForm">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="tasks-input"
        placeholder="Enter the construction project to be completed"
      />
      <button type="submit" className="tasks-btn">
        Add
      </button>
    </form>
  );
};

export default TasksForm;

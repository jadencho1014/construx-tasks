import React, { useState } from "react";

const TasksFormEdit = ({ editTask, taskItem }) => {
  const [value, setValue] = useState(taskItem.taskItem);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTask(value, taskItem.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TasksForm">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="tasks-input"
      />
      <button type="submit" className="tasks-btn">
        Update
      </button>
    </form>
  );
};

export default TasksFormEdit;

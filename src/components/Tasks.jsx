import React from "react";
import { HiPencil, HiTrash } from "react-icons/hi";

const Tasks = ({ taskItem, deleteTask, editTask, toggleComplete }) => {
  return (
    <div className="Tasks">
      <p
        className={`${taskItem.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(taskItem.id)}
      >
        {taskItem.taskItem}
      </p>
      <div>
        <HiPencil className="edit" onClick={() => editTask(taskItem.id)} />
        <HiTrash className="delete" onClick={() => deleteTask(taskItem.id)} />
      </div>
    </div>
  );
};

export default Tasks;

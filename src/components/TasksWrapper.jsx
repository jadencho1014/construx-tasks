import React, { useState } from "react";
import Tasks from "./Tasks";
import TasksForm from "./TasksForm";
import { v4 as uuidv4 } from "uuid";
import TasksFormEdit from "./TasksFormEdit";

const TasksWrapper = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), taskItem: task, completed: false, isEditing: false },
    ]);
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const editTaskItem = (taskItem, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, taskItem, isEditing: !task.isEditing }
          : task
      )
    );
  };

  return (
    <div className="TasksWrapper">
      <h1>Construx-Tasks</h1>
      <TasksForm addTask={addTask} />
      {tasks.map((task) =>
        task.isEditing ? (
          <TasksFormEdit editTask={editTaskItem} taskItem={task} />
        ) : (
          <Tasks
            key={task.id}
            taskItem={task}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default TasksWrapper;

import { useState } from "react";
import "./styles.css";
// const initialTasks = [
//   { id: 1, description: "Finish report", completed: true },
//   { id: 2, description: "Buy groceries", completed: false },
//   { id: 3, description: "Exercise for 30 minutes", completed: false },
//   { id: 4, description: "Call a friend", completed: false },
//   { id: 5, description: "Read a book", completed: false },
//   { id: 6, description: "Cook dinner", completed: true },
//   { id: 7, description: "Learn a new skill", completed: false },
//   { id: 8, description: "Plan weekend activities", completed: false },
//   { id: 9, description: "Organize workspace", completed: false },
//   { id: 10, description: "Watch a movie", completed: false },
// ];

export default function TasksList({
  tasks,
  onToggleTask,
  onRemovingTask,
  onClearAll,
}) {
  const [sortBy, setSortBy] = useState("all");
  let sortedTasks;
  if (sortBy === "all") sortedTasks = tasks;
  if (sortBy === "active")
    sortedTasks = tasks.slice().filter((task) => !task.completed);
  if (sortBy === "completed")
    sortedTasks = tasks.slice().filter((task) => task.completed);

  return (
    <div>
      <div className="sorting">
        <button
          onClick={() => setSortBy("all")}
          className={`sorting-button ${sortBy === "all" ? "active" : ""}`}
        >
          all
        </button>
        <button
          onClick={() => setSortBy("active")}
          className={`sorting-button ${sortBy === "active" ? "active" : ""}`}
        >
          active
        </button>
        <button
          onClick={() => setSortBy("completed")}
          className={`sorting-button ${sortBy === "completed" ? "active" : ""}`}
        >
          Completed
        </button>
        <button className="sorting-button" onClick={() => onClearAll()}>
          clear
        </button>
      </div>

      <ul className="toDoList">
        {sortedTasks.map((tasks) => (
          <Task
            tasks={tasks}
            onToggleTask={onToggleTask}
            key={tasks.id}
            onRemovingTask={onRemovingTask}
          />
        ))}
      </ul>
    </div>
  );
}

function Task({ tasks, onToggleTask, onRemovingTask }) {
  return (
    <li className="list-items">
      {/* <input type="checkbox" onClick={() => onToggleTask(tasks.id)} /> */}
      <span
        onClick={() => onToggleTask(tasks.id)}
        style={tasks.completed ? { textDecoration: "line-through" } : {}}
      >
        {tasks.description}
      </span>
      <button className="delete-icon" onClick={() => onRemovingTask(tasks.id)}>
        X
      </button>
    </li>
  );
}

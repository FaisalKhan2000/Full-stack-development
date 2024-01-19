import "./styles.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // adding tasks
  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  // checking and unchecking task
  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // removing task
  function handleRemovingTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  // clear all
  function handleClearAll() {
    const confirmed = confirm("Do you want to delete all the task?");
    if (confirmed) setTasks([]);
  }

  return (
    <>
      <div className="container">
        <Header />
        <Main
          tasks={tasks}
          onAddTasks={handleAddTasks}
          onToggleTask={handleToggleTask}
          onRemovingTask={handleRemovingTask}
          onClearAll={handleClearAll}
        />
      </div>
      <Footer tasks={tasks} />
    </>
  );
}

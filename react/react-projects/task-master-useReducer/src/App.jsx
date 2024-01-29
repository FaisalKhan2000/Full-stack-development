import React, { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

import Form from "./Form";
import FilterTasks from "./FilterTasks";
import TaskList from "./TaskList";

const initialState = {
  tasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: uuidv4(),
            description: action.payload,
            completed: false,
          },
        ],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };

    case "SET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskDescription, setEditedTaskDescription] = useState("");
  const [filter, setFilter] = useState("all");

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    // console.log("Loaded tasks from local storage:", storedTasks);
    if (storedTasks && Array.isArray(storedTasks) && storedTasks.length > 0) {
      dispatch({ type: "SET_TASKS", payload: storedTasks });
    }
  }, []);

  // Save tasks to local storage whenever tasks are updated
  useEffect(() => {
    // console.log("Saving tasks to local storage:", state.tasks);
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTask("");
    }
  };
  const handleDeleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const handleToggleCompleted = (taskId) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: taskId });
  };

  const handleEditTask = (taskId) => {
    setEditingTask(taskId);
    const taskToEdit = state.tasks.find((task) => task.id === taskId);
    // console.log(taskToEdit);
    setEditedTaskDescription(taskToEdit.description);
  };

  const handleSaveEdit = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id: editingTask, description: editedTaskDescription },
    });
    setEditingTask(null);
    setEditedTaskDescription("");
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredTasks = () => {
    switch (filter) {
      case "completed":
        return state.tasks.filter((task) => task.completed);
      case "remaining":
        return state.tasks.filter((task) => !task.completed);
      default:
        return state.tasks;
    }
  };

  return (
    <div>
      <h2>Task List</h2>

      <Form
        dispatch={dispatch}
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
      {/* Filter Buttons */}
      <FilterTasks filter={filter} handleFilterChange={handleFilterChange} />

      {/* Task List */}
      <TaskList
        filteredTasks={filteredTasks}
        handleToggleCompleted={handleToggleCompleted}
        editingTask={editingTask}
        editedTaskDescription={editedTaskDescription}
        setEditedTaskDescription={setEditedTaskDescription}
        handleSaveEdit={handleSaveEdit}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;

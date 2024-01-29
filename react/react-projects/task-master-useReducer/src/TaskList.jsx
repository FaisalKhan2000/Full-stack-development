import React from "react";

const TaskList = ({
  filteredTasks,
  handleToggleCompleted,
  editingTask,
  editedTaskDescription,
  setEditedTaskDescription,
  handleSaveEdit,
  handleEditTask,
  handleDeleteTask,
}) => {
  console.log("Rendering TaskList with filtered tasks:", filteredTasks());
  return (
    <ul>
      {filteredTasks().map((task) => (
        <li
          key={task.id}
          className={task.completed === true ? "completed" : ""}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleCompleted(task.id)}
          />
          {editingTask === task.id ? (
            <>
              <input
                type="text"
                value={editedTaskDescription}
                onChange={(e) => setEditedTaskDescription(e.target.value)}
              />
              <button onClick={handleSaveEdit}>Save</button>
            </>
          ) : (
            <>
              {task.description}
              <button onClick={() => handleEditTask(task.id)}>Edit</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

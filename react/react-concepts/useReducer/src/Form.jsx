const Form = ({ newTask, setNewTask, handleAddTask }) => {
  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Form;

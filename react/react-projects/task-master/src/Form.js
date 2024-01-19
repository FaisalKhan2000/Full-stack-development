import { useState } from "react";

export default function Form({ onAddTasks }) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!input) return;

    const newTask = {
      id: crypto.randomUUID(),
      description: input,
      completed: false,
    };

    console.log(newTask);
    onAddTasks(newTask);

    setInput("");
  }
  return (
    <form className="inputField" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-icon">+</button>
    </form>
  );
}

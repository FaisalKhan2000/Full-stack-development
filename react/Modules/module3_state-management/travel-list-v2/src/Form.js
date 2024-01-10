import { useState } from "react";
import "./styles.css";

export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // adding condition to not return anything if description is empty
    if (!description) {
      return;
    }

    const newItem = { quantity, description, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    //  Resetting the form to initial state
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for 😍 your trip </h3>
      <select
        value={quantity}
        onChange={(e) => {
          // console.log(Number(e.target.value));
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

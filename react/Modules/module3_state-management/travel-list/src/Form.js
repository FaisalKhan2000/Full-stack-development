import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // adding condition to not return anything if description is empty
    if (!description) {
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    //  Resetting the form to initial state
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
          console.log(Number(e.target.value));
        }}
      >
        {/* 
        The code generates sequential numbers from 1 to 20 and then gets used to generate 20 options.
  
        Array.from() is a built-in JS method that creates a new array from an iterable or an array-like object (objects with a length property and indexed elements). 
        The first argument of { length: 20 }, specifies the desired length of the array. The second argument is an optional mapping function that determines the values of the array elements. In this case, the mapping function takes two parameters: _ for the element value (undefined), and i for the zero-based index. The mapping function returns i + 1 as the value for each element. The resulting array will have a length of 20 and contain the values  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] . */}
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
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

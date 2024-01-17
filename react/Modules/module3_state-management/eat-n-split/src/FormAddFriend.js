import "./styles.css";
import Button from "./Button";
import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👯‍♀️ Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          // console.log(e.target.value);
          setName(e.target.value);
        }}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => {
          // console.log(e.target.value);
          setImage(e.target.value);
        }}
      />

      <Button>Add</Button>
    </form>
  );
}

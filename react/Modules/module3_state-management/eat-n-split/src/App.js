import FriendList from "./FriendList";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import "./styles.css";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // hiding and unhiding the FormAddFriend component
  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((curr) => (curr?.id === friend?.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && (
          <FormAddFriend
            showAddFriend={showAddFriend}
            onAddFriend={handleAddFriend}
          />
        )}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

/*

App
  - FriendList
  - FormAddFriend
  - Button
  - FormSplitBill
  
(v1)
step1: building all the static components
step2: building the FormAddFriend and making it print on the console
step3: Hiding and unhiding the FormAddFriend component
step4: making the FormAddFriend directly print on the FriendList by passing a prop directly to the app component

(v2) - whenever we select any component we want the information to be passed to the Form split bill component
step1: hiding the FormSplitBill component using the selectedFriend
step2: creating a handleSelection function and passing it to the select button using props
step2: passing the selectedFriend to the FormSplitBill component to display the selectedFriend name
step4: Higlighting the friend component whenever the select is clicked, we will pass selectedFriend to the friendlist component till the friend component and create a condition isSelected =. selectedFriend?.id === friend?.id if it is true then only Higlight the component
step4: Adding a condition to the button to display close and select based on condition
step5: Adding a condition to the handleSelection function so that when we click the close it should close the window
setSelectedFriend((curr) => (curr?.id === friend?.id ? null : friend));


(v3) - creating controlled elements for thr FormSplitBill component

(v4) - Splitting the Bill
step1 - listing to submit event
*/

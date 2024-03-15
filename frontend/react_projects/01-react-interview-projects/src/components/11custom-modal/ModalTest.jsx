import React, { useState } from "react";
import Modal from "./Modal";
import "./modal.css";

/*
1. create a state showModalPopup set it to false
2. create a button, add onclick handleToggleModalPopup
3. function handleToggleModalPopup() {
  setShowModalPopup(!showModalPopup)
}
4. conditionally render, showModalPopup && <Modal/>
*/

function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}

export default ModalTest;

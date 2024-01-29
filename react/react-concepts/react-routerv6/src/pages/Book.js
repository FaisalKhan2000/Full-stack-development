import React from "react";
import { useParams } from "react-router-dom";

export default function Book() {
  // const paramsObject = useParams();
  // console.log(paramsObject); // whichever book URL is clicked will return {id: '1'}

  const { id } = useParams();
  return (
    <div>
      <p>Book {id}</p>
    </div>
  );
}

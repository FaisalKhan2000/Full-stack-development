import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "./userSlice";

function Username() {
  const username = useSelector(getUser);
  // console.log(username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;

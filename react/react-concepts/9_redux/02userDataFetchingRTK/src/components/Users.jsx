import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/usersSlice";

function Users() {
  const { data: users, status } = useSelector((state) => state.users);
  console.log(users);

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(fetchUsers());
  }, []);
  return <div></div>;
}

export default Users;

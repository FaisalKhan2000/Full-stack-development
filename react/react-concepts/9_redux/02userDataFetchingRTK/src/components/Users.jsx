import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchUsers } from "../store/usersSlice";

function Users() {
  const { data: users, status } = useSelector((state) => state.users);
  console.log(users);
  console.log(status);

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(fetchUsers());
  }, []);
  if (status === STATUSES.LOADING) return <div>Loading....</div>;

  if (status === STATUSES.ERROR) return <div>Error loading data</div>;
  return <div></div>;
}

export default Users;

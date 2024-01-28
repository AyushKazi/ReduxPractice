import React from "react";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/slices/userSlice";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearAllUsers());
  };

  return (
    <button
      className=" bg-red-400 rounded-lg px-3 hover:bg-slate-500"
      onClick={deleteUsers}
    >
      Clear All
    </button>
  );
};

export default DeleteAllUsers;

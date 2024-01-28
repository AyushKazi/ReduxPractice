import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  const data = useSelector((state) => {
    return state.users;
  });

  return (
    <>
      {data.map((user, id) => {
        return (
          <li key={id} className="flex justify-between m-2">
            {user}
            <button
              className=" bg-red-400 rounded-lg px-3 hover:bg-slate-500"
              onClick={() => deleteUser(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};

export default DisplayUsers;

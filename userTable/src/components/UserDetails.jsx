import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import { fakeUserData } from "../api";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    console.log(name);
    dispatch(addUser(name));
  };

  return (
    <div className=" my-4 border-2  max-w-lg m-auto">
      <div className=" flex justify-between  mb-4">
        <h1 className=" text-3xl">List of Users</h1>
        <button
          className="px-3 py-2 bg-sky-500 hover:bg-sky-700 rounded-lg"
          onClick={() => addNewUser(fakeUserData())}
        >
          Add new user
        </button>
      </div>

      {/* List of users */}
      <ul>
        <li>HI</li>
        <li>HI</li>
      </ul>
    </div>
  );
};

export default UserDetails;

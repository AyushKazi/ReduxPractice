import React from "react";

const UserDetails = () => {
  return (
    <div className=" my-4 border-2  max-w-lg m-auto">
      <div className=" flex justify-between  mb-4">
        <h1 className=" text-3xl">List of Users</h1>
        <button className="px-3 py-2 bg-sky-500 hover:bg-sky-700 rounded-lg">
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

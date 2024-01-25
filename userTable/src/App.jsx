import React from "react";
import NavBar from "./components/NavBar";
import UserDetails from "./components/UserDetails";
import "./index.css";

const App = () => {
  return (
    <>
      <h1 className="text-green-500">hello</h1>
      <NavBar />
      <UserDetails />
    </>
  );
};

export default App;

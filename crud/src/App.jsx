import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import UserListing from "./users/UserListing";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container text-center">
        <h1 className="text-info">Welcome to CRUD Application</h1>
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/create-user")}
        >
          Create user
        </button>
      </div>
    </>
  );
}

export default App;

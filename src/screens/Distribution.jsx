import React from "react";
import { useNavigate } from "react-router-dom";
import "./Distribution.css";
import logo from "../Images/NewLogo.png";

export const Distribution = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img className="logo" src={logo}></img>
      <nav>
        <h3 onClick={() => navigate("/Home")}>Home</h3>{" "}
        <h3 onClick={() => navigate("/inventory")}>Inventory</h3>
        <h3 onClick={() => navigate("/supply")}>Supply Requests</h3>
      </nav>
    </div>
  );
};

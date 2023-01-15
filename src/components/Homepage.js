import React from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/game");
  };
  return (
    <div className="app">
      <button onClick={handleClick}>Start</button>
    </div>
  );
};

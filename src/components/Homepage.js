import React from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/game");
  };
  return (
    <div className="app">
      <div className="instructions">
        <h3>How to play?</h3>
        <div className="text">
          Building world with 5 types of blocks: Grass, Wood, Grass-wood, Glass
          and Dirt. You can switch blocks with numbers 1-5 on your keyboard. You
          can navigate the world with the mouse and also with W,A,S,D keys. You
          can click to add blocks and a;t+Click to remove blocks. You can
          save/reset your world by clicking the button
        </div>
      </div>
      <div className="game-btn">
        <button onClick={handleClick}>Start</button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

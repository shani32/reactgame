import React, { useCallback, useEffect, useState } from "react";

function actionByKey(key) {
  const keyActionMap = {
    KeyW: "moveForward",
    KeyS: "moveBackword",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
    Digit1: "wood",
    Digit2: "tree",
    Digit3: "stone",
    Digit4: "ground",
    Digit5: "groundGrass",
  };
  return keyActionMap[key];
}
export const UseKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackword: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    wood: false,
    tree: false,
    stone: false,
    ground: false,
    groundGrass: false,
  });

  const handleKeyDown = useCallback((e) => {
    const action = actionByKey(e.code);
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: true,
        };
      });
    }
  }, []);
  const handleKeyUp = useCallback((e) => {
    const action = actionByKey(e.code);
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [action]: false,
        };
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return actions;
};

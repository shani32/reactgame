import React from "react";
import { UseStore } from "../UseStore";

export const World = () => {
  const [saveWorld, resetWorld] = UseStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);
  return (
    <div className="world absolute">
      <button onClick={() => saveWorld()}>Save</button>
      <button onClick={() => resetWorld()}>Reset</button>
    </div>
  );
};

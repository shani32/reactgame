import React from "react";
import { UseStore } from "../UseStore";

export const World = () => {
  const [savedWorld, resetWorld] = UseStore((state) => [
    state.savedWorld,
    state.resetWorld,
  ]);

  //   return (
  //     <div className="world absolute">
  //       <button onClick={() => savedWorld()}>Save</button>
  //       <button onClick={() => resetWorld()}>Reset</button>
  //     </div>
  //   );
};

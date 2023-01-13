import React from "react";
import { UseStore } from "../UseStore";
import { Cube } from "./Cube";

export const Cubes = () => {
  const [cubes] = UseStore((state) => [state.cubes]);
  console.log(cubes);
  //   return null;
  return cubes.map(({ key, pos, texture }) => {
    return <Cube key={key} position={pos} texture={texture} />;
  });
};

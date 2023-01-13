import { useBox } from "@react-three/cannon";
import React from "react";
import * as textures from "../textures";

export const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const activeTexture = textures[texture + "Texture"];
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  );
};

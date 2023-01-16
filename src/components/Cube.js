import { useBox } from "@react-three/cannon";
import React from "react";
import * as textures from "../textures";
import { UseStore } from "../UseStore";

export const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const [addCube, removeCube] = UseStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  const activeTexture = textures[texture + "Texture"];
  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const clicked = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;

        if (e.altKey) {
          removeCube(x, y, z);
          return;
        } else if (clicked === 0) {
          addCube(x + 1, y, z);
          return;
        } else if (clicked === 1) {
          addCube(x - 1, y, z);
          return;
        } else if (clicked === 2) {
          addCube(x, y + 1, z);
          return;
        } else if (clicked === 3) {
          addCube(1, y - 1, z);
          return;
        } else if (clicked === 4) {
          addCube(x, y, z + 1);
          return;
        } else if (clicked === 5) {
          addCube(x, y, z - 1);
          return;
        }
      }}
      ref={ref}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  );
};

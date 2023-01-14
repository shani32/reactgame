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
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (clickedFace === 0) {
          addCube(x + 1, y, z);
        } else if (clickedFace === 1) {
          addCube(x - 1, y, z);
        } else if (clickedFace === 2) {
          addCube(x, y + 1, z);
        } else if (clickedFace === 3) {
          addCube(1, y - 1, z);
        } else if (clickedFace === 4) {
          addCube(1, y, z + 1);
        } else if (clickedFace === 5) {
          addCube(x - 1, y, z - 1);
        }
      }}
      ref={ref}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  );
};
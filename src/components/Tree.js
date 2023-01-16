import React from "react";
import { usePlane } from "@react-three/cannon";
import { treeTexture, woodTexture, stoneTexture } from "../textures";
import { NearestFilter, PlaneGeometry, RepeatWrapping } from "three";
import { UseStore } from "../UseStore";

export const Tree = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
  }));

  const [addCube] = UseStore((state) => [state.addCube]);

  woodTexture.magFilter = NearestFilter;
  woodTexture.wrapS = RepeatWrapping;
  woodTexture.wrapT = RepeatWrapping;
  woodTexture.repeat.set(100, 100);
  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val));
        addCube(x, y, z);
      }}
      ref={ref}
    >
      <planeGeometry attach="geometry" args={[80, 80]} />
      <meshStandardMaterial attach="material" map={treeTexture} />
    </mesh>
  );
};

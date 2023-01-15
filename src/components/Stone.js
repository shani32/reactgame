import React from "react";
import { usePlane } from "@react-three/cannon";
import { stoneTexture } from "../textures";
import { NearestFilter, PlaneGeometry, RepeatWrapping } from "three";
import { UseStore } from "../UseStore";

export const Stone = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [90, -1, 0],
  }));

  const [addCube] = UseStore((state) => [state.addCube]);

  stoneTexture.magFilter = NearestFilter;
  stoneTexture.wrapS = RepeatWrapping;
  stoneTexture.wrapT = RepeatWrapping;
  stoneTexture.repeat.set(100, 100);
  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val));
        addCube(x, y, z);
      }}
      ref={ref}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={stoneTexture} />
    </mesh>
  );
};

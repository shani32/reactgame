import { nanoid } from "nanoid";
import React from "react";
import { create } from "zustand";

export const UseStore = create((set) => ({
  texture: "wood",
  cubes: [
    // {
    //   key: nanoid(),
    //   pos: [1, 1, 1],
    //   texture: "wood",
    // },
    // {
    //   key: nanoid(),
    //   pos: [3, 1, 3],
    //   texture: "stone",
    // },
  ],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));

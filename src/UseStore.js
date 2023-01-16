import { nanoid } from "nanoid";
import React from "react";
import { create } from "zustand";

export const UseStore = create((set) => ({
  texture: "wood",
  cubes: JSON.parse(window.localStorage.getItem("cubu")) || [],

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
  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },
  setTexture: (texture) => {
    set(() => ({
      texture,
    }));
  },
  savedWorld: () => {
    set((prev) => {
      window.localStorage.setItem("cubu", JSON.stringify(prev.cubes));
      //   window.location.reload(false);
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));

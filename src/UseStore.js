import React from "react";
import { create } from "zustand";

export const UseStore = create((set) => ({
  texture: "wood",
  cubes: [],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [...prev.cubes, {}],
    }));
  },
}));

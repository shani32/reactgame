import React, { useEffect, useState } from "react";
import { UseKeyboard } from "../UseKeyboard";
import { UseStore } from "../UseStore";
import { woodI, treeI, stoneI, groundI, groundGrassI } from "../images";

const images = {
  wood: woodI,
  tree: treeI,
  stone: stoneI,
  ground: groundI,
  groundGrass: groundGrassI,
};
export const TextureType = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = UseStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const { wood, tree, stone, ground, groundGrass } = UseKeyboard();

  useEffect(() => {
    const textures = { wood, tree, stone, ground, groundGrass };
    const pressedType = Object.entries(textures).find(([k, v]) => v);
    if (pressedType) {
      setTexture(pressedType[0]);
    }
  }, [setTexture, wood, tree, stone, ground, groundGrass]);

  useEffect(() => {
    const visibillity = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);
    return () => {
      clearTimeout(visibillity);
    };
  }, [activeTexture]);
  return (
    visible && (
      <div className="absolute centered texture-type">
        {Object.entries(images).map(([k, src]) => {
          return (
            <img
              src={src}
              key={k}
              alt={k}
              className={`${k === activeTexture ? "active" : ""}`}
            />
          );
        })}
      </div>
    )
  );
};

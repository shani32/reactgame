import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Tree } from "./Tree";
import { Player } from "./Player";
import { PersonView } from "./PersonView";
import { Cubes } from "./Cubes";
import { TextureType } from "./TextureType";
import { World } from "./World";
import { Stone } from "./Stone";

export const Game = () => {
  return (
    <>
      <Canvas>
        <Sky
          distance={450000}
          sunPosition={[0, -1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <ambientLight intensity={0.5} />
        <PersonView />
        <Physics>
          <Player />
          <Cubes />
          <Tree />
          <Stone />
        </Physics>
      </Canvas>
      <div className="cursor centered absolute">+</div>
      <TextureType />
      <World />
    </>
  );
};

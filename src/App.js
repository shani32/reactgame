import { useEffect } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Stone, Tree } from "./components/Tree";
import { Player } from "./components/Player";
import { PersonView } from "./components/PersonView";
import { Cubes } from "./components/Cubes";
import { TextureType } from "./components/TextureType";
import { World } from "./components/World";

function App() {
  useEffect(() => {});
  return (
    <>
      <div className="app"></div>
      <Canvas>
        {/* <Sky sunPosition={[100, 100, 20]} /> */}
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
}

export default App;

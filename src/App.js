import { useEffect } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Tree } from "./components/Tree";
import { Player } from "./components/Player";
import { PersonView } from "./components/PersonView";

function App() {
  useEffect(() => {});
  return (
    <>
      <div className="app"></div>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <PersonView />
        <Physics>
          <Player />
          <Tree />
        </Physics>
      </Canvas>
      <div className="cursor centered absolute">+</div>
    </>
  );
}

export default App;

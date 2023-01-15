import { useEffect } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Tree } from "./components/Tree";
import { Player } from "./components/Player";
import { PersonView } from "./components/PersonView";
import { Cubes } from "./components/Cubes";
import { TextureType } from "./components/TextureType";
import { World } from "./components/World";
import { Stone } from "./components/Stone";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Game } from "./components/Game";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

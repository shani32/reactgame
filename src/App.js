import { useEffect } from "react";
import "./App.css";

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

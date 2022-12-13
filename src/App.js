import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gnghouse } from "./components/Gnghouse";
import { Main } from "./components/Main";
import { Production } from "./components/Production";
import { Space } from "./components/Space";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/Production" element={<Production />} />
          <Route exact path="/Space" element={<Space />} />
          <Route exact path="/Gnghouse" element={<Gnghouse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

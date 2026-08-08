import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeHero from "./Components/Home/HomeHero";
import HompePage from "./Pages/HompePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HompePage />} />
    </Routes>
  );
};

export default App;

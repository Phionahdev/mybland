import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./my portifolio/Homepage";
import Skillspage from "./my portifolio/Skillspage";
import Servicepage from "./my portifolio/Servicepage";
import Aboutpage from "./my portifolio/Aboutpage";
import Awards from "./my portifolio/Awards";
import Contacts from "./my portifolio/Contacts";
import Portifoliopage from "./my portifolio/Portifoliopage";
import "./index.css";
const App = () => {
  return (
    <Routes>
      <Route path="" element={<Homepage />} />
      <Route path="/skills" element={<Skillspage />} />
      <Route path="/service" element={<Servicepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/award" element={<Awards />} />
      <Route path="/portifolio" element={<Portifoliopage />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
  );
};

export default App;

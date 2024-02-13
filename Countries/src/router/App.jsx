import { useState } from "react";
import { useCountryData } from "../Services/useCountryData.jsx";
import SliderBar from "../componets/SliderBar.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "../componets/Home.jsx";
import CrearPais from "../componets/CrearPais.jsx";
import GestionarPais from "../componets/GestionarPais.jsx";


function App() {
  return (
    <div className="app-container">
   <Router>
    <SliderBar />
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/crear" element={<CrearPais />} />
    <Route path="/gestionar" element={<GestionarPais/>} />
    </Routes>
   </Router>
      </div>
  
  );
}
export default App;

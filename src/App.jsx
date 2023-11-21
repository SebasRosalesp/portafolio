import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Resumen from "./components/Resumen";
import Proyectos from "./components/Proyectos";
import Nav from "./components/Nav";
import './App.css';
import Logo from "./components/Logo";

 const App = ()=>{
  return(
    <HashRouter>
      <div className="pagina">
      <Logo/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="Inicio" element={<Inicio/>}/>
        <Route path="Resumen" element={<Resumen/>}/>
        <Route path="Proyectos" element={<Proyectos/>}/>
      </Routes>
      </div>
    </HashRouter>
  )
 }

 export default App;

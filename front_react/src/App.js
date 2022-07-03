import React, {useState} from "react";
import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

import NavBar from "./Componentes/Navbar";
import Main from "./Componentes/Main";
import Footer from "./Componentes/Footer";
import Login from "./Componentes/Login/Login";

import Consulta from "./Componentes/Consulta";
import Compras from "./Componentes/Compras";
import Autorizaciones from "./Componentes/Autorizaciones";
import Presupuesto from "./Componentes/Presupuesto";
import useToken from "./useToken";


function App() {
  
  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken = {setToken} />
  }

  return (
  <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element = {<Main />} />
        <Route path="/consulta" element = {<Consulta />} />
        <Route path="/compras" element = {<Compras />} />
        <Route path="/autorizaciones" element = {<Autorizaciones />} />
        <Route path="/presupuesto" element = {<Presupuesto />} />
      </Routes>  
    </Router>
    <Footer />
  </>  
  );
}

export default App;

import React from "react";
import './App.css';
/* import MonPremierComponent from './components/MonPremierComponent'; */
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import "./Bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {
  return (
    
    <Router>
      <Navbar />
    <Routes>
      <Route path = "/Home" element = {<Home/>}/>
      <Route path = "/About" element = {<About/>}/>
      <Route path = "/Contact" element = {<Contact/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;

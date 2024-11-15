import React from "react";
import logo from './logo.svg';
import './App.css';
/* import MonPremierComponent from './components/MonPremierComponent'; */
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to = "/">Acceuil</Link>
          </li>
          <li>
            <Link to ="/About">A Propos</Link>
          </li>
          <li>
            <Link to ="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/About" element = {<About/>}/>
      <Route path = "/Contact" element = {<Contact/>}/>
    </Routes>
    </Router>
  );
}

export default App;

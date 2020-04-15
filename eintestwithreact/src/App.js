import React from 'react';
import { Header } from './components/Static/Header';
import { Menu } from './components/Static/Menu';
import { Content } from './components/Static/Content';
import { Footer } from './components/Static/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import './components/Static/Content.css'
import './components/Static/Header.css'
import './components/Static/Menu.css'
import './components/Static/Footer.css'

function App() {
  return (
    <div className="container">

      <div className="header"><Header /></div>
      <Router>

        <div className="menu"><Menu /></div>
        <div className="content"><Content /></div>

      </Router>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import History from './components/History';
import { Home } from './components/Home';
import './App.css'
import './db.json'
import Translate from './components/Translate';

function App() {


  return (
    <BrowserRouter>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/translate">Translate</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<Translate />} />


          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App;
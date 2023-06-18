import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Login } from './pages/login/login';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
              <Route path="/" element={<Login />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

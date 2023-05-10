import { Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import People from './pages/People';
import Game from './pages/Game';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;

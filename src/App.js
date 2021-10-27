import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div
        className="
        w-full
        flex
        justify-center
        min-h-screen
        text-gray-700
        "
      >
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;

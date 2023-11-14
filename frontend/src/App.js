import React from 'react';
import Navbar from './Navbar';
import DrawInput from './DrawInput';
import './styles/App.css'; // Ensure correct path to App.css

function App() {
  return (
    <div className="app">
      <Navbar />
      <DrawInput />
      <div className="content">

      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './Navbar';
import './styles/App.css'; // Ensure correct path to App.css

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        {/* Other content goes here */}
      </div>
    </div>
  );
}

export default App;

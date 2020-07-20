import React from 'react';
import './App.css';
import PokeData from "../src/components/PokeData"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>pokemon</h1>
        <PokeData />
      </header>
    </div>
  );
}

export default App;

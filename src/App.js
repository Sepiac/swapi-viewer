import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StarWarsCharacter from './Components/StarWarsCharacter';

function App() {
  const [character, setCharacter] = useState({})

  fetch('https://swapi.dev/api/people/1/').then(res => res.json()).then(character => {
    setCharacter(character)
  });
  return (
    <div className="App">
      <header className="App-header">

        <StarWarsCharacter character={character}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

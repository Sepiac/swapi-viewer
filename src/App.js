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
      </header>
    </div>
  );
}

export default App;

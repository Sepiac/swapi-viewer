import React, { useState, useEffect } from 'react';
import './App.css';
import StarWarsCharacter from './Components/StarWarsCharacter';

function App() {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    fetch('https://swapi.dev/api/people/1/').then(res => res.json()).then(character => {
      setCharacter(character)
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <StarWarsCharacter character={character}/>
      </header>
    </div>
  );
}

export default App;

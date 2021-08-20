import React from 'react';
import './App.css';
import {useGetStarWarsCharacter, useGetStarWarsWorld} from './hooks';
import { StarWarsCharacter, StarWarsWorld } from './Components';

function App() {

  const { character } = useGetStarWarsCharacter(1);
  const { world } = useGetStarWarsWorld(character?.homeworld);

  return (
    <div className="App">
      <header className="App-header">
        <StarWarsCharacter character={character} />
        <StarWarsWorld world={world} />
      </header>
    </div>
  );
}

export default App;

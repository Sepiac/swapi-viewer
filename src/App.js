import React from 'react';
import './App.css';
import { useSwapiApi } from './hooks';
import { StarWarsCharacter, StarWarsWorld } from './Components';

function App() {

  const { data: character } = useSwapiApi({
    entity: 'people',
    id: 1
  });

  const { data: world } = useSwapiApi({ url: character?.homeworld });

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

import { useEffect, useState } from 'react';

const useGetStarWarsCharacter = personId => {
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${personId}/`).then(res => res.json()).then(character => {
            setCharacter(character)
        });
    }, [])

    return {
        character
    };
};

export default useGetStarWarsCharacter;

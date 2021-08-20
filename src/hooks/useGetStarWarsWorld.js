import { useEffect, useState } from 'react';

const useGetStarWarsWorld = url => {
    const [world, setWorld] = useState({})

    useEffect(() => {
        fetch(url).then(res => res.json()).then(world => {
            setWorld(world)
        });
    }, [url])

    return {
        world
    };
};

export default useGetStarWarsWorld;

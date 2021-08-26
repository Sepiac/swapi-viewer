import { useEffect, useState } from 'react';

const useSwapiApi = ({ entity, id, url }) => {
    const [data, setData] = useState({})

    useEffect(() => {
        if(url || (entity && id)) {
            fetch(url ? url : `https://swapi.dev/api/${entity}/${id}/`).then(res => res.json()).then(data => {
                setData(data)
            });
        }
    }, [url, entity, id])

    return {
        data
    };
};

export default useSwapiApi;

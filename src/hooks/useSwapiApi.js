import { useQuery } from 'react-query'

const useSwapiApi = ({ entity, id, url }) => {
    return useQuery(`${entity}:${id}`, () => (
        fetch(url ? url : `https://swapi.dev/api/${entity}/${id}/`).then(res => res.json())
    ), {
        staleTime: (1000 * 60) * 60
    })
}

export default useSwapiApi

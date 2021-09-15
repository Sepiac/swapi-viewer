import { useQuery } from 'react-query'

const useSwapiApi = ({ entity, id, url }) => {
    return useQuery(`${entity}:${id}`, async () => {
        const response = await fetch(url ? url : `https://swapi.dev/api/${entity}/${id}/`)
        if(!response.ok) {
            throw new Error(`Error ${response.status} when fetching ${entity} id ${id}.`)
        }
        return response.json()
    }, {
        staleTime: (1000 * 60) * 60
    })
}

export default useSwapiApi

import axios from 'axios'
import { useQuery } from 'react-query'

const swapiAxios = ({ entity, id, url }) => {
    return axios.get(url ? url : `https://swapi.dev/api/${entity}/${id}/`);
}

const useSwapiApi = ({ entity, id, url }) => {
    return useQuery(`${entity}:${id}`, async () => {
        const response = await swapiAxios({ entity, id, url })
        if(!response.status === 200) {
            throw new Error(`Error ${response.status} when fetching ${entity} id ${id}.`)
        }
        return response.data
    }, {
        staleTime: (1000 * 60) * 60
    })
}

export default useSwapiApi

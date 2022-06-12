import { $authHost, $host } from "./index"

export const createArtist = async (art) => {
    const {data} = await $authHost.post('api/artist', art)
    return data
}

export const deleteArtist = async (id) => {
    const {data} = await $authHost.delete('api/artist/' + id)
    return data
}

export const fetchArtists = async () => {
    const {data} = await $host.get('api/artist')
    return data
}

export const fetchOneArtist = async (id) => {
    const {data} = await $host.get('api/artist/' + id)
    return data
}
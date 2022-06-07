import { $authHost, $host } from "./index"

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const deleteType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}


export const createArt = async (art) => {
    const {data} = await $authHost.post('api/art', art)
    return data
}

export const deleteArt = async (art) => {
    const {data} = await $authHost.post('api/art', art)
    return data
}

export const fetchArts = async (typeId, artistId, page, limit) => {
    const {data} = await $host.get('api/art', {params:{
        typeId, artistId, page, limit
    }})
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

export const fetchOneArt = async (id) => {
    const {data} = await $host.get('api/art/' + id)
    return data
}
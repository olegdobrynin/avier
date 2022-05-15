import jwt_decode from "jwt-decode"
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

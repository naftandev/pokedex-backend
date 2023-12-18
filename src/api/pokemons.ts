import instance from './instance'

export const getPokemonsList = (limit: number, offset: number) => instance.get(`/pokemon?limit=${limit}&offset=${offset}`)

export const getPokemonInfo = (name: string) => instance.get(`/pokemon/${name}`)

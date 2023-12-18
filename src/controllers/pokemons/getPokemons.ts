import { Request, Response } from 'express'
import { AxiosResponse } from 'axios'
import { Default } from '../../interface'
import { getPokemonInfo, getPokemonsList } from '../../api'
import { parsePokemons } from '../../utils'

const getPokemons = async (request: Request, response: Response) => {
  const { limit, offset } = request.query

  try {
    const { data: pokemonsList } = await getPokemonsList(Number(limit), Number(offset))
    const promises = [] as Promise<AxiosResponse<unknown, unknown>>[]
    pokemonsList.results.forEach((pokemon: Default) => promises.push(getPokemonInfo(pokemon.name)))

    const results = await Promise.all(promises)
    const parsedPokemons = parsePokemons(results)

    response.status(200).json({ length: pokemonsList.count, data: parsedPokemons })
  } catch (error) {
    response.status(500).json({ msg: 'Error to getting pokemons' })
  }
}

export default getPokemons

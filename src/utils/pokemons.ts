import { AxiosResponse } from 'axios'
import { IPokemonData, IPokemonInfo } from '../interface'

export const parsePokemons = (data: AxiosResponse<unknown, unknown>[]) => {
  const pokemons = [] as IPokemonInfo[]

  data.forEach(dataItem => {
    const data = dataItem.data as IPokemonData
    const pokemon = {
      id: data.id,
      picture: data.sprites.front_default || 'https://i.pinimg.com/564x/95/d5/cd/95d5cded00f3a3e8a98fb1eed568aa9f.jpg',
      order: data.order,
      height: data.height,
      name: data.name,
      moves: data.moves.map(({ move }) => move.name),
      stats: data.stats.map(({ base_stat, stat }) => ({ name: stat.name, value: base_stat })),
      abilities: data.abilities.map(({ ability }) => ability.name)
    }
    return pokemons.push(pokemon)
  })

  return pokemons
}

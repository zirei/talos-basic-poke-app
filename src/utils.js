export const pokemonDataApi = 'https://pokeapi.co/api/v2/'

export const pokemonImageApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

export const getId = () => {
    return Math
        .random()
        .toString(16)
        .substr(2)
}
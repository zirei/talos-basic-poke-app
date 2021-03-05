import { pokemonDataApi } from "../../utils"

export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST'
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS'
export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR'

export const fetchPokemons = (counter) => (dispatch) => {
  const url = `${pokemonDataApi}pokemon?offset=${counter}&limit=20`
  dispatch({ type: FETCH_POKEMONS_REQUEST })

  fetch(url)
    .then(res => res.json())
    .then(queryData => {
      dispatch({
        type: FETCH_POKEMONS_SUCCESS,
        payload: {
          pokemons: queryData
        }
      })
    })
    .catch(error => {
      dispatch({
        type: FETCH_POKEMONS_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}
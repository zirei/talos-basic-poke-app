import { pokemonDataApi, pokemonImageApi } from "../../utils"

export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST'
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS'
export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR'
export const SELECTED_POKEMON = 'SELECTED_POKEMON'
export const UNSELECTED_POKEMON = 'UNSELECTED_POKEMON'
export const SELECTED_POKEMONS_ERROR = 'SELECTED_POKEMONS_ERROR'
export const KEEP_SELECTED_POKEMONS = 'KEEP_SELECTED_POKEMONS'

export const fetchPokemons = (counter) => (dispatch) => {
  const url = `${pokemonDataApi}pokemon?offset=${counter}&limit=20`
  dispatch({ type: FETCH_POKEMONS_REQUEST })

  fetch(url)
    .then(res => res.json())
    .then(queryData => {
      console.log(queryData)
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

export const selectedPokemon = (pokemon, pokemonUrl, pokemonDescriptionUrl) => (dispatch) => {

  Promise.all([
    fetch(pokemonUrl).then(pokeInfo => pokeInfo.json()),
    fetch(pokemonDescriptionUrl).then(pokeDes => pokeDes.json())
  ]).then(([pokeInfo, pokeDes]) => {
    if (pokeDes.gender_rate >= 4) {
      pokeDes.gender_rate = 'female'
    } else if (pokeDes.gender_rate === -1) {
      pokeDes.gender_rate = 'genderless'
    } else {
      pokeDes.gender_rate = 'male'
    }
    dispatch({
      type: SELECTED_POKEMON,
      payload: {
        pokemon: pokemon,
        pokemonInfo: pokeInfo,
        pokemonDescription: pokeDes,
      }
    })
  })
    .catch(error => {
      dispatch({
        type: SELECTED_POKEMONS_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}

export const keepSelectedPokemons = (pokemon) => (dispatch) => {
  dispatch({
    type: KEEP_SELECTED_POKEMONS,
    payload: {
      pokemon
    }
  })
}

export const unselectedPokemons = () => (dispatch) => {
  dispatch({
    type: UNSELECTED_POKEMON,
    payload: {
      pokemons: []
    }
  })
}
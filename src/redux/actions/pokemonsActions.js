import { pokemonDataApi } from "../../utils"

export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST'
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS'
export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR'
export const SELECTED_POKEMON = 'SELECTED_POKEMON'
export const UNSELECTED_POKEMON = 'UNSELECTED_POKEMON'
export const SELECTED_POKEMONS_ERROR = 'SELECTED_POKEMONS_ERROR'
export const KEEP_SELECTED_POKEMONS = 'KEEP_SELECTED_POKEMONS'
export const COUNT_POKEMON = 'COUNT_POKEMON'
export const STORE_POKEMON_SEARCH = 'STORE_POKEMON_SEARCH'


export const fetchPokemons = (counter) => (dispatch) => {
  const url = `${pokemonDataApi}pokemon?offset=${counter}&limit=20`
  dispatch({ type: FETCH_POKEMONS_REQUEST })
  fetch(url)
    .then(res => res.json())
    .then(queryData => {
      setTimeout(() => {
        dispatch({
          type: FETCH_POKEMONS_SUCCESS,
          payload: {
            pokemons: queryData
          }
        })
      }, 500)
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

export const countPokemon = (scrollCounter) => (dispatch) => {
  dispatch({
    type: COUNT_POKEMON,
    payload: {
      scrollCounter: scrollCounter + 20
    }
  })
}

export const storePokemonSearching = (search_bar_text, pokemonsListInput) => (dispatch) => {
  dispatch({
    type: STORE_POKEMON_SEARCH,
    payload: {
      search_bar: search_bar_text,
      pokemonsList: pokemonsListInput.filter(
        (pokemon) => pokemon.name.toLowerCase().includes(
          search_bar_text.toLowerCase()
        )
      )
    }
  })
}
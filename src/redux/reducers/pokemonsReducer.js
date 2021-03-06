import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
  SELECTED_POKEMON,
  UNSELECTED_POKEMON,
  SELECTED_POKEMONS_ERROR,
  KEEP_SELECTED_POKEMONS
} from '../actions/pokemonsActions'

const initialState = {
  pokemonsList: [],
  isFetching: false,
  error: null,
  selectedPokemons: [],
  showSelected: false,
  keepSelected: false,
  scrollCounter: 0
}

function pokemons(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemonsList: [
          ...state.pokemonsList,
          ...action.payload.pokemons.results
        ],
      }

    case FETCH_POKEMONS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    case SELECTED_POKEMON:
      return {
        ...state,
        showSelected: true,
        keepSelected: true,
        selectedPokemons: [
          ...state.selectedPokemons,
          {
            ...action.payload.pokemon,
            ...action.payload.pokemonInfo,
            ...action.payload.pokemonDescription,
          }
        ]
      }
    case UNSELECTED_POKEMON:
      return {
        ...state,
        showSelected: false,
        keepSelected: false,
        selectedPokemons: []
      }
    case KEEP_SELECTED_POKEMONS:
      return {
        ...state,
        showSelected: false,
        keepSelected: true,
        selectedPokemons: [
          ...state.selectedPokemons
        ]
      }
    case SELECTED_POKEMONS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default pokemons
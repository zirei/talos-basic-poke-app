import { STORE_POKEMON_SEARCH } from '../actions/navigationBarActions'

const initialState = {
  search_bar: '',
  isFetching: false,
}

function storePokemonSearch(state = initialState, action) {
  switch (action.type) {
    case STORE_POKEMON_SEARCH:
      return {
        ...state,
        search_bar: action.payload.search_bar,
        isFetching: true,
      }
    default:
      return state
  }
}

export default storePokemonSearch
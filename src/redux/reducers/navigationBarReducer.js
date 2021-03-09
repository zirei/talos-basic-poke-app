import { STORE_POKEMON_SEARCH } from '../actions/navigationBarActions'
import pokemons from './pokemonsReducer'

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
        isFetching: true

      }

    default:
      return state
  }
}


export default storePokemonSearch

// const filterItems = (query) => {
//   storePokemonSearching.pokemons
//   return fruits.filter(function (el) {
//     return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//   })
// }

// console.log(filterItems('ap')); // ['apple', 'grapes']
// console.log(filterItems('an')); // ['banana', 'mango', 'orange']
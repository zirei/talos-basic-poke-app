import { combineReducers } from 'redux'
import pokemons from './pokemonsReducer'
import storePokemonSearch from './navigationBarReducer'

export default combineReducers({
  pokemons,
  storePokemonSearch,
})
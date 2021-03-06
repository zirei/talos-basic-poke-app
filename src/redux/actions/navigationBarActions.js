export const STORE_POKEMON_SEARCH = 'STORE_POKEMON_SEARCH'

export const storePokemonSearching = (search_bar_text) => (dispatch) => {
    dispatch({
        type: STORE_POKEMON_SEARCH,
        payload: {
            search_bar: search_bar_text,
        }
      })
    
}
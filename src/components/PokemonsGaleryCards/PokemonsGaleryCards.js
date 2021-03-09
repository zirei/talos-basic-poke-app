import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import galeryStyles from './GaleryComponent.module.css'
import { CardDeck } from 'react-bootstrap'
import PokemonCard from '../PokemonCard'
import { fetchPokemons, selectedPokemon, unselectedPokemons, countPokemon } from '../../redux/actions/pokemonsActions'
import { getId, pokemonDataApi } from '../../utils'
import { RingLoader } from 'react-spinners'
import PokemonsModal from '../PokemonsModal'

const PokemonsGaleryCards = ({ fetchPokemons, scrollCounter, pokemonsList, selectedPokemon, countPokemon, spinerFetching }) => {

  const pokemonDescriptionUrl = (url) => {
    return `${pokemonDataApi}pokemon-species/${url.split('/')[6]}/`
  }

  useEffect(() => {
    fetchPokemons(scrollCounter)
  }, [fetchPokemons, scrollCounter])

  window.onscroll = (() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      countPokemon(scrollCounter)
    }
  });

  return (
    <div xs="auto" sm="auto" md="auto" lg="auto" className={galeryStyles.cardDeckContainer}>
      < CardDeck >
          {pokemonsList.map((pokemon) => {
            return (
              <div key={pokemon.name + getId(22)} onClick={() => {
                selectedPokemon(pokemon, pokemon.url, pokemonDescriptionUrl(pokemon.url))
              }}>
                <PokemonCard
                  name={pokemon.name}
                  url={pokemon.url}
                />
              </div>
            )
          })
        }
      </CardDeck>
      {spinerFetching
        ?
        <div class={galeryStyles.spinerSearch}>
          <RingLoader
            color={"orange"}
          />
        </div>
        :
        <div className={galeryStyles.searchText} >
          <span type="button" onClick={() => {
            countPokemon(scrollCounter)
          }}>
            Click here or Scroll to see more Pokemons
        </span>
        </div>
      }
      <div>
        <PokemonsModal />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    spinerFetching: state.pokemons.isFetching,
    scrollCounter: state.pokemons.scrollCounter,
    showSelected: state.pokemons.showSelected,
    pokemonsList: state.pokemons.pokemonsList,
    showSearchPokemons: state.pokemons.showSearchPokemons,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: (url) => dispatch(fetchPokemons(url)),
    selectedPokemon: (pokemon, pokemonUrl, pokemonDescriptionUrl) => dispatch(
      selectedPokemon(pokemon, pokemonUrl, pokemonDescriptionUrl)
    ),
    unselectedPokemons: () => dispatch(unselectedPokemons()),
    countPokemon: (scrollCounter) => dispatch(countPokemon(scrollCounter)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsGaleryCards)


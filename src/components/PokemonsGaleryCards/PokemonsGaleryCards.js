import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import galeryStyles from './GaleryComponent.module.css'
import { CardDeck, Row, Col, Container } from 'react-bootstrap';
import PokemonCard from '../PokemonCard'
import { fetchPokemons, selectedPokemon, unselectedPokemons, countPokemon } from '../../redux/actions/pokemonsActions'
import { getId, pokemonDataApi, pokemonImageApi } from '../../utils'
import { SyncLoader } from 'react-spinners'
import PokemonsModal from '../PokemonsModal'

const PokemonsGaleryCards = ({ fetchPokemons, scrollCounter, pokemonsList, isFetching, selectedPokemon, unselectedPokemons, url, countPokemon }) => {

  const pokemonDescriptionUrl = (url) => {
    return `${pokemonDataApi}pokemon-species/${url.split('/')[6]}/`
  }

  useEffect(() => {
    //debounce
    setTimeout(() => {
      fetchPokemons(scrollCounter)
    }, 2000)
  }, [fetchPokemons, scrollCounter])

  window.onscroll = (() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      countPokemon(scrollCounter)
    }
  });

  return (
    <div xs="auto" sm="auto" md="auto" lg="auto" className={galeryStyles.CardDeckContainer}>
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
          })}
      </CardDeck>
      <div>
        <PokemonsModal />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.storePokemonSearch.isFetching,
    scrollCounter: state.pokemons.scrollCounter,
    showSelected: state.pokemons.showSelected,
    pokemonsList: state.pokemons.pokemonsList.filter(
      (pokemon) => pokemon.name.toLowerCase().includes(
        state.storePokemonSearch.search_bar.toLowerCase()
      )
    ),
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


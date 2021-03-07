import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import galeryStyles from './GaleryComponent.module.css'
import { CardDeck, Row, Col, Container } from 'react-bootstrap';
import PokemonCard from '../PokemonCard'
import { fetchPokemons, selectedPokemon, unselectedPokemons } from '../../redux/actions/pokemonsActions'
import { getId, pokemonDataApi, pokemonImageApi } from '../../utils'
import { SyncLoader } from 'react-spinners'
import PokemonsModal from '../PokemonsModal'
import { storePokemonSearching } from '../../redux/actions/navigationBarActions'

const PokemonsGaleryCards = ({ fetchPokemons, scrollCounter, pokemonsList, isFetching, selectedPokemon, unselectedPokemons, url,search_bar }) => {

  const pokemonDescriptionUrl = (url) => {
    return `${pokemonDataApi}pokemon-species/${url.split('/')[6]}/`
  }

  useEffect(() => {
    fetchPokemons(scrollCounter)
  }, [fetchPokemons, scrollCounter])


  return (
    <div>
      {/* if (search_bar === '') */}
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
    queryCounter: state.pokemons.queryCounter,
    pokemonsList: state.pokemons.pokemonsList,
    showSelected: state.pokemons.showSelected,
    search_bar: state.storePokemonSearch.search_bar,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: (url) => dispatch(fetchPokemons(url)),
    selectedPokemon: (pokemon, pokemonUrl, pokemonDescriptionUrl) => dispatch(
      selectedPokemon(pokemon, pokemonUrl, pokemonDescriptionUrl)
    ),
    unselectedPokemons: () => dispatch(unselectedPokemons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsGaleryCards)


import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import galeryStyles from './GaleryComponent.module.css'
import { Card, CardDeck } from 'react-bootstrap';
import PokemonCard from '../PokemonCard'
import { fetchPokemons } from '../../redux/actions/pokemonsActions'
import { getId } from '../../utils'

const PokemonsGaleryCards = ({ fetchPokemons, scrollCounter, pokemonsList }) => {
  useEffect(() => {
    fetchPokemons(scrollCounter)
  }, [fetchPokemons, scrollCounter])


  return (
    < CardDeck >
      {pokemonsList.map((pokemon) => {
        return (
          <div key={pokemon.name + getId}>
            <PokemonCard
              name={pokemon.name}
              url={pokemon.url}
            />
          </div>
        )
      })}
    </CardDeck>
  )
}

const mapStateToProps = (state) => {
  return {
    queryCounter: state.pokemons.queryCounter,
    pokemonsList: state.pokemons.pokemonsList
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: (url) => dispatch(fetchPokemons(url)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsGaleryCards)


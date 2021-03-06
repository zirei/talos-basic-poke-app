import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';
import { selectedPokemon, unselectedPokemons, keepSelectedPokemons } from '../../redux/actions/pokemonsActions'
import { SyncLoader } from 'react-spinners'
import PokemonModalVs from './PokemonModalVs';
import PokemonModalAlone from './PokemonModalAlone';
import { render } from '@testing-library/react';

function PokemonsModal({ showSelected, unselectedPokemons, selectedPokemons, keepSelectedPokemons }) {
  const handleClose = () => unselectedPokemons();
  const keepPokemon = () => {
    console.log('click', selectedPokemons)
    keepSelectedPokemons();
  }

  console.log(selectedPokemons.length)
  return (
    <>
      {selectedPokemons.length === 2
        ?
        <PokemonModalVs
          selectedPokemons={selectedPokemons}
          unselectedPokemons={handleClose}
          showSelected = {showSelected}
        />
        :
        <PokemonModalAlone
          selectedPokemons={selectedPokemons}
          showSelected = {showSelected}
          unselectedPokemons={handleClose}
          keepSelectedPokemons={keepPokemon}
        />
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    showSelected: state.pokemons.showSelected,
    selectedPokemons: state.pokemons.selectedPokemons,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    unselectedPokemons: () => dispatch(unselectedPokemons()),
    keepSelectedPokemons: () => dispatch(keepSelectedPokemons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsModal)
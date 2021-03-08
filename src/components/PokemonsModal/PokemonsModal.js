import React from 'react'
import { connect } from 'react-redux';
import { unselectedPokemons, keepSelectedPokemons } from '../../redux/actions/pokemonsActions'
import PokemonModalVs from './PokemonModalVs';
import PokemonModalAlone from './PokemonModalAlone';

function PokemonsModal({ showSelected, unselectedPokemons, selectedPokemons, keepSelectedPokemons }) {
  const handleClose = () => unselectedPokemons();
  const keepPokemon = () => {
    console.log('click', selectedPokemons)
    keepSelectedPokemons();
  }

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
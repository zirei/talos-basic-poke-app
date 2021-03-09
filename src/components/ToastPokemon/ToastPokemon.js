import React from 'react'
import { connect } from 'react-redux'
import { Toast } from 'react-bootstrap'
import toastStyle from './ToastPokemons.module.css'

const ToastPokemon = ({ pokemons, keepSelected }) => {
  return (
    <Toast show={keepSelected} className={toastStyle.bodyToast} >
      <Toast.Header closeButton={false}>
        <strong className='mr-auto'>Comparing pokemon</strong>
      </Toast.Header>
      <Toast.Body>
        {keepSelected
        ?pokemons.selectedPokemons[0].name
        :''
        }
      </Toast.Body>
    </Toast>

  )
}


const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons,
    keepSelected: state.pokemons.keepSelected,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastPokemon)
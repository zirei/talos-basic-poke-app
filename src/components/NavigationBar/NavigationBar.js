import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import ToastPokemon from '../ToastPokemon'
import navigationStyle from './NavigationBar.module.css'
import { storePokemonSearching } from '../../redux/actions/pokemonsActions'

const NavigationBar = ({ storePokemonSearching, rootPokemonList }) => {
  const input = useRef()

  const getInput = (inputEvent) => {
    inputEvent.preventDefault()
    const search = inputEvent.target.value
    storePokemonSearching(search, rootPokemonList)

  }

  return (
    < nav className={navigationStyle.style} >
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">PokeApp</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/pokemons">Pokemons</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={getInput}
            ref={input}
          />
        </Form>
      </Navbar>
      <ToastPokemon />
    </nav >
  )
}


const mapStateToProps = (state) => {
  return {
    rootPokemonList: state.pokemons.rootPokemonList,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    storePokemonSearching: (searchPokemon, rootPokemonList) => dispatch(storePokemonSearching(searchPokemon, rootPokemonList)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)
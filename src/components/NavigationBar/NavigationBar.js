import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import ToastPokemon from '../ToastPokemon'
import navigationStyle from './NavigationBar.module.css'
import { storePokemonSearching } from '../../redux/actions/navigationBarActions'

const NavigationBar = ({storePokemonSearching}) => {
  const input = useRef()

  const getInput = (inputEvent) => {
    storePokemonSearching(inputEvent.target.value)
  }

  return (
    < nav className={navigationStyle.style} >
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">PokeApp</Navbar.Brand>
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
    
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    storePokemonSearching:(searchPokemon) => dispatch(storePokemonSearching(searchPokemon)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)
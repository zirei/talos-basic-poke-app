import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { fetchPokemons } from '../../redux/actions/pokemonsActions'
import ToastPokemon from '../ToastPokemon'
import navigationStyle from './NavigationBar.module.css'

const NavigationBar = () => {
  return (
    < nav className={navigationStyle.style} >
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">PokeApp</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/pokemons">Pokemons</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <ToastPokemon />
      }
    </nav >
  )
}


const mapStateToProps = (state) => {
  return {
  }
}


const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)
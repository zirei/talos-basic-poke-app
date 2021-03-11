import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import textStyles from './Home.module.css'

const Home = () => {
  return (
    <div className={textStyles.text}>
      <h1> WHAT IS A POKEMON? </h1>
      <p>
      Pokémon are creatures of all shapes and sizes that live either 
      in the wild or alongside humans. Most Pokémon only speak to say their names.
      Pokémon owners (called "Trainers") raise and care for them. During their adventures,
      Pokémon grow and gain more experience, and sometimes even evolve to become stronger Pokémon.
      Currently, there are more than 700 creatures that inhabit the Pokémon universe.
      </p>
      <Button
        className={textStyles.button}
        as={NavLink}
        to='/pokemons'
        variant='secondary'
        >
          SHOW ME 
      </Button>
    </div>
  )
}

export default Home
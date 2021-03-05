import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import textStyles from './Home.module.css'

const Home = () => {
  return (
    <div className={textStyles.text}>
      <h1> WELCOME TO THE POKEMON ADVENTURE </h1>
      <p>
      Once upon a time there was a young man named Ash, he decided to undertake an adventure 
      in a wonderful world full of incredible creatures, today I bring you the collection that I manage to find,
      get into this pokemon adventure!
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
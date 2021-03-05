import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import textStyles from './Home.module.css'

const Home = () => {
  return (
    <div className={textStyles.text}>
      <h1> BIENVENIDOS A LA AVENTURA POKEMON </h1>
      <p>
        Erase una vez un joven llamado ash, el decidio emprender una aventura en un maravilloso mundo
        repleto de criaturas increibles, hoy les traigo la coleccion que logro encontrar, adentrate en
        esta aventura <strong>pokemon!</strong>
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
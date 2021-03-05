import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap';
import { pokemonDataApi, pokemonImageApi } from '../../utils'
import pokemonCardStyle from './PokemonCard.module.css'

const PokemonCard = ({
  name,
  url
}) => {
  const imageUrl = `${pokemonImageApi}${url.split('/')[6]}.png`

  return (
    <Card className={pokemonCardStyle.image}>
      <Card.Img variant="top" src={imageUrl} fluid={'true'}/>
      <Card.Footer className={pokemonCardStyle.textFooter}>
        <small className="text-muted">{name}</small>
      </Card.Footer>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonCard)
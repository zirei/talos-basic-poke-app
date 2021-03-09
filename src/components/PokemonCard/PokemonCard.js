import React from 'react'
import { connect } from 'react-redux'
import { Card, Container} from 'react-bootstrap';
import { pokemonImageApi } from '../../utils'
import pokemonCardStyle from './PokemonCard.module.css'


const PokemonCard = ({ name, url }) => {
  const imagePokemonUrl = `${pokemonImageApi}${url.split('/')[6]}.png`

  return (
    <div>
      <Container>
        <Card className={pokemonCardStyle.cards}>
          <Card.Img className={pokemonCardStyle.image} variant='top' src={imagePokemonUrl} fluid={'true'} />
          <Card.Footer className={pokemonCardStyle.textFooter}>
            <small className='text-muted'>{name}</small>
          </Card.Footer>
        </Card>
      </Container>
    </div>
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
)(PokemonCard)
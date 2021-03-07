import React from 'react'
import { connect } from 'react-redux'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { pokemonDataApi, pokemonImageApi } from '../../utils'
import pokemonCardStyle from './PokemonCard.module.css'


const PokemonCard = ({
  name,
  url,
}) => {
  const imagePokemonUrl = `${pokemonImageApi}${url.split('/')[6]}.png`
  
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} sm={4} md={4} lg={2}>
            <Card className={pokemonCardStyle.card}>
              <Card.Img className={pokemonCardStyle.image} variant="top" src={imagePokemonUrl} fluid={'true'} />
              <Card.Footer className={pokemonCardStyle.textFooter}>
                <small className="text-muted">{name}</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
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
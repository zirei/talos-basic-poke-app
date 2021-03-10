import React from 'react'
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';
import { pokemonImageApi } from '../../utils'
import pokeDescriptionStyle from './PokemonStyles.module.css'
import ChartComponent from '../ChartComponent'
import { nanoid } from 'nanoid'

function PokemonsModalAlone({ showSelected, selectedPokemons, unselectedPokemons, keepSelectedPokemons }) {

  const imagePokemonUrl = (pokemon) => {
    return `${pokemonImageApi}${pokemon.url.split('/')[6]}.png`
  }

  return (
    <>
      <Modal show={showSelected} onHide={unselectedPokemons}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedPokemons.map((pokemon) => {
              return (
                <div key={nanoid()}>
                  {String(pokemon.name).toUpperCase()}
                  <Button className={pokeDescriptionStyle.compareButton} onClick={keepSelectedPokemons} variant='secondary'> Compare to...</Button>
                </div>
              )
            })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPokemons.map((pokemon) => {
            if (showSelected) {
              return (
                <div className={pokeDescriptionStyle} key={nanoid()}>
                  <Row xs={12} sm={12} >
                    <Col xs={4} sm={4} md={4} lg={4}>
                      <Image className={pokeDescriptionStyle.imgFluid}
                        variant='top' src={imagePokemonUrl(pokemon)} fluid={'true'}
                      />
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8}>
                      {pokemon.flavor_text_entries[1].flavor_text.toLowerCase()}
                      <hr />
                      <Row>
                        <Col xs={4} sm={4} md={4} lg={4}>
                          <span className={pokeDescriptionStyle.titles}> Height </span><br />
                          <span className={pokeDescriptionStyle.textMargin}> {selectedPokemons[0].height/10}m </span>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}>
                          <span className={pokeDescriptionStyle.titles}> Weight </span>
                          <span className={pokeDescriptionStyle.textMargin}> {selectedPokemons[0].weight/10}kg </span>

                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}>
                          <span className={pokeDescriptionStyle.titles}> Gender </span>
                          <span className={pokeDescriptionStyle.textMargin}> {selectedPokemons[0].gender_rate} </span>

                        </Col>
                      </Row>
                      <Row>
                        <Col className={pokeDescriptionStyle.margin} xs={6} sm={6} md={6} lg={6}>
                          <span className={pokeDescriptionStyle.titles}> Abilities </span>
                          <ul>
                            {pokemon.abilities.map((pokeAbilitis) => (
                              <li key={nanoid()}>
                                {pokeAbilitis.ability.name}
                              </li>
                            ))}
                          </ul>
                        </Col>
                        <Col className={pokeDescriptionStyle.margin} xs={6} sm={6} md={6} lg={6}>
                          <span className={pokeDescriptionStyle.titles}> Type </span>
                          <ul>
                            {pokemon.types.map((pokeTypes) => (
                              <li key={nanoid()}>
                                {pokeTypes.type.name}
                              </li>
                            ))}
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <h1 className={pokeDescriptionStyle.statesStyle}> Stats </h1>
                      <ChartComponent
                        pokemonName={pokemon.name}
                        pokemonStats={pokemon.stats.map((state) => {
                          return state.base_stat
                        })}
                        pokemonStatNames={pokemon.stats.map((state) => {
                          return state.stat.name
                        })}
                        pokemonColor={
                          pokemon.color.name === 'white'
                          ? 'rgba(167, 246, 222, 0.5)'
                          : pokemon.color.name
                        }
                        pokemonBorderColor={
                          pokemon.color.name === 'white'
                          ? 'rgba(167, 246, 222, 1)'
                          : pokemon.color.name
                        }
                      />
                      <hr />
                    </Col>
                  </Row>
                </div>
              )
            } else {
              return (
                <h1> Not found Pokemon</h1>
              )
            }
          })}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PokemonsModalAlone
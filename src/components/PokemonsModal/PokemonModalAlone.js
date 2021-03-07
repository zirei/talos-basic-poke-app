import React from 'react'
import { connect } from 'react-redux';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';
import { SyncLoader } from 'react-spinners'
import { pokemonImageApi, getId } from '../../utils'
import PokeDescriptionStyle from './PokemonStyles.module.css'
import ChartComponent from '../ChartComponent'

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
                <div key={pokemon.name + getId(11)}>
                  {String(pokemon.name).toUpperCase()}
                  <Button className={PokeDescriptionStyle.compareButton} onClick={keepSelectedPokemons} variant='secondary'> Compare to...</Button>
                </div>
              )
            })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPokemons.map((pokemon) => {
            if (showSelected) {
              return (
                <div className={PokeDescriptionStyle} key={pokemon.name + getId(12)}>
                  <Row xs={12} sm={12} >
                    <Col xs={4} sm={4} md={4} lg={4}>
                      <Image className={PokeDescriptionStyle.imgFluid}
                        variant="top" src={imagePokemonUrl(pokemon)} fluid={'true'}
                      />
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8}>
                      {pokemon.flavor_text_entries[0].flavor_text}
                      <hr />
                      <Row>
                        <Col xs={4} sm={4} md={4} lg={4}>
                          <span className={PokeDescriptionStyle.titles}> Height </span>
                          <span className={PokeDescriptionStyle.textMargin}> {selectedPokemons[0].height}m </span>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}>
                          <span className={PokeDescriptionStyle.titles}> Weight </span>
                          <span className={PokeDescriptionStyle.textMargin}> {selectedPokemons[0].weight}kg </span>

                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}>
                          <span className={PokeDescriptionStyle.titles}> Gender </span>
                          <span className={PokeDescriptionStyle.textMargin}> {selectedPokemons[0].gender_rate} </span>

                        </Col>
                      </Row>
                      <Row>
                        <Col className={PokeDescriptionStyle.margin} xs={6} sm={6} md={6} lg={6}>
                          <span className={PokeDescriptionStyle.titles}> Abilities </span>
                          <ul>
                            {pokemon.abilities.map((pokeAbilitis) => (
                              <li key={pokeAbilitis + getId(13)}>
                                {pokeAbilitis.ability.name}
                              </li>
                            ))}
                          </ul>
                        </Col>
                        <Col className={PokeDescriptionStyle.margin} xs={6} sm={6} md={6} lg={6}>
                          <span className={PokeDescriptionStyle.titles}> Type </span>
                          <ul>
                            {pokemon.types.map((pokeTypes) => (
                              <li key={pokeTypes + getId(14)}>
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
                      <h1 className={PokeDescriptionStyle.statesStyle}> Stats </h1>
                      <ChartComponent
                        name={pokemon.name}
                        stats={pokemon.stats.map((state) => {
                          return state.base_stat
                        })}
                        statNames={pokemon.stats.map((state) => {
                          return state.stat.name
                        })}
                        color={
                          pokemon.color.name === 'white'
                          ? 'rgba(167, 246, 222, 0.5)'
                          : pokemon.color.name
                        }
                        borderColor={
                          pokemon.color.name === 'white'
                          ? 'rgba(167, 246, 222, 1)'
                          : pokemon.color.name
                        }
                      />
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
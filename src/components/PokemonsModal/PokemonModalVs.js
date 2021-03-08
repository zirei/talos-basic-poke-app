import React from 'react'
import { Modal, Row, Col, Image } from 'react-bootstrap'
import { pokemonImageApi, getId } from '../../utils'
import PokeDescriptionStyle from './PokemonStyles.module.css'
import ChartComponentVS from '../ChartComponentVS'

function PokemonsModalVS({ showSelected, selectedPokemons, unselectedPokemons, keepSelectedPokemons }) {
  const imagePokemonUrl = (pokemon) => {
    return `${pokemonImageApi}${pokemon.url.split('/')[6]}.png`
  }
  let comparativeMessage
  if (String(selectedPokemons[0].name).toUpperCase() === String(selectedPokemons[1].name).toUpperCase()) {
    comparativeMessage = `${String(selectedPokemons[0].name).toUpperCase()} VS. ${String(selectedPokemons[1].name).toUpperCase()}2`
  } else {
    comparativeMessage = `${String(selectedPokemons[0].name).toUpperCase()} VS. ${String(selectedPokemons[1].name).toUpperCase()}`
  }
  return (
    <>
      <Modal show={showSelected} onHide={unselectedPokemons}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              {comparativeMessage}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Image className={PokeDescriptionStyle.imgFluid} variant="top" src={imagePokemonUrl(selectedPokemons[0])} fluid={'true'} />
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Image className={PokeDescriptionStyle.imgFluid} variant="top" src={imagePokemonUrl(selectedPokemons[1])} fluid={'true'} />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={5} sm={5} md={5} lg={5}>
                <span className={PokeDescriptionStyle.textMarginVs}> {selectedPokemons[0].height}m </span><br />
                <span className={PokeDescriptionStyle.textMarginVs}> {selectedPokemons[0].weight}kg </span><br />
                <span className={PokeDescriptionStyle.textMarginVs}> {selectedPokemons[0].gender_rate} </span><br />
                {selectedPokemons[0].abilities.map((pokeAbilitis) => (
                  <span className={PokeDescriptionStyle.textMarginVs} key={pokeAbilitis + getId(20)}>
                    {pokeAbilitis.ability.name}
                    <br />
                  </span>
                ))}
              </Col>
              <Col xs={2} sm={1} md={2} lg={2}>
                <span className={PokeDescriptionStyle.titles}> Height </span><br />
                <span className={PokeDescriptionStyle.titles}> Weight </span><br />
                <span className={PokeDescriptionStyle.titles}> Gender </span><br />
                <span className={PokeDescriptionStyle.titles}> Abilities </span>

              </Col>
              <Col xs={5} sm={6} md={5} lg={5}>
                <span className={PokeDescriptionStyle.textMarginVs}> {selectedPokemons[1].height}m </span><br />
                <span className={PokeDescriptionStyle.textMarginVs}> {selectedPokemons[1].weight}kg </span><br />
                <span className={PokeDescriptionStyle.textMarginVs}> {selectedPokemons[1].gender_rate} </span><br />
                {selectedPokemons[1].abilities.map((pokeAbilitis) => (
                  <span className={PokeDescriptionStyle.textMarginVs} key={pokeAbilitis + getId(21)}>
                    {pokeAbilitis.ability.name}
                    <br />
                  </span>
                ))}
              </Col>
            </Row>
            <hr />
            <Col>
              <h1 className={PokeDescriptionStyle.statesStyle}> Stats </h1>
              <ChartComponentVS
                name={selectedPokemons[0].name}
                name2={selectedPokemons[1].name}
                stats={selectedPokemons[0].stats.map((state) => {
                  return state.base_stat
                })}
                stats2={selectedPokemons[1].stats.map((state) => {
                  return state.base_stat
                })}
                statNames={selectedPokemons[0].stats.map((state) => {
                  return state.stat.name
                })}
                color={
                  selectedPokemons[0].color.name === 'white'
                    ? 'rgba(167, 246, 222, 0.5)'
                    : selectedPokemons[0].color.name
                }
                borderColor={
                  selectedPokemons[0].color.name === 'white'
                    ? 'rgba(167, 246, 222, 1)'
                    : selectedPokemons[0].color.name
                }
                color2={
                  selectedPokemons[1].color.name === 'white'
                    ? 'rgba(167, 246, 222, 1)'
                    : selectedPokemons[1].color.name
                }
                borderColor2={
                  selectedPokemons[1].color.name === 'white'
                    ? 'rgba(167, 246, 222, 1)'
                    : selectedPokemons[1].color.name
                }
              />
            </Col>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default PokemonsModalVS
import React from 'react'
import { connect } from 'react-redux';
import { Modal, Row, Col, Image } from 'react-bootstrap';
import { SyncLoader } from 'react-spinners'
import { pokemonImageApi, getId } from '../../utils'
import PokeDescriptionStyle from './PokemonStyles.module.css'

function PokemonsModalVS({ showSelected, selectedPokemons, unselectedPokemons, keepSelectedPokemons }) {
  const imagePokemonUrl = (pokemon) => {
    return `${pokemonImageApi}${pokemon.url.split('/')[6]}.png`
  }
  return (
    <>
      <Modal show={showSelected} onHide={unselectedPokemons}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              {String(selectedPokemons[0].name).toUpperCase()} VS. {String(selectedPokemons[1].name).toUpperCase()}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPokemons.map((pokemon) => {
            if (showSelected) {
              return (
                <div key={pokemon.name + getId()}>
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
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                      <span className={PokeDescriptionStyle.titles}> Height </span><br />
                      <span className={PokeDescriptionStyle.titles}> Weight </span><br />
                      <span className={PokeDescriptionStyle.titles}> Gender </span><br />
                      <span className={PokeDescriptionStyle.titles}> Abilities </span>

                    </Col>
                    <Col xs={5} sm={5} md={5} lg={5}>
                      <span className={PokeDescriptionStyle.textMarginVs}> {selectedPokemons[1].height}m </span><br />
                      <span className={PokeDescriptionStyle.textMarginVs}> {selectedPokemons[1].weight}kg </span><br />
                      <span className={PokeDescriptionStyle.textMarginVs}> {selectedPokemons[1].gender_rate} </span><br />
                    </Col>
                  </Row>
                  <hr />
                  <Col>
                    <span className={PokeDescriptionStyle.titles}> Stats </span>
                  </Col>
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

export default PokemonsModalVS
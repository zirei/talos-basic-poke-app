import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Modal, Button, Row, Col, Container, Image } from 'react-bootstrap';
import { selectedPokemon, unselectedPokemons, keepSelectedPokemons } from '../../redux/actions/pokemonsActions'
import { SyncLoader } from 'react-spinners'
import { pokemonImageApi } from '../../utils'


function PokemonsModalAlone({ showSelected, selectedPokemons, unselectedPokemons, keepSelectedPokemons }) {

  const imagePokemonUrl = (pokemon) => {
    return `${pokemonImageApi}${pokemon.url.split('/')[6]}.png`
  }

  console.log('desde le modal', selectedPokemons[0])
  return (
    <>
      <Modal show={showSelected} onHide={unselectedPokemons}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedPokemons.map((pokemon, index = 1) => {
              return (
                <div key={index + Math.random()}>
                  {String(pokemon.name).toUpperCase()}
                  <Button onClick={keepSelectedPokemons} variant='secondary'> Compare to...</Button>
                </div>
              )
            })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPokemons.map((pokemon, index = 1) => {
            if (showSelected) {
              return (
                <div>
                  <Row>
                    <Image variant="top" src={imagePokemonUrl(pokemon)} fluid={'true'} />
                  </Row>
                  <Col>
                    {selectedPokemons[0].flavor_text_entries[0].flavor_text}
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
// pokemonsList: [],
//   isFetching: false,
//   error: null,
//   selectedPokemons: [],
//   showSelected: false,
//   keepSelected: false,
//   scrollCounter: 0

export default PokemonsModalAlone
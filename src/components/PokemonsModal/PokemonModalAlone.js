import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';
import { selectedPokemon, unselectedPokemons, keepSelectedPokemons } from '../../redux/actions/pokemonsActions'
import { SyncLoader } from 'react-spinners'

          
function PokemonsModalAlone({ showSelected, selectedPokemons, unselectedPokemons, keepSelectedPokemons }) {

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
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
}

export default PokemonsModalAlone
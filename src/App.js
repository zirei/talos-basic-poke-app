import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store'

import  PokemonsGaleryCards from './components/PokemonsGaleryCards'

const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path='/' component={PokemonsGaleryCards}/>
        </BrowserRouter>
      </Provider>
    )
  // return (
  //   <div>
  //     <useFetch >
  // { isLoading && <h1>Cargando...</h1> }
  // <ul>
  //     {pokemones.map(pokemon => (
  //         <li key={pokemon.id}>
  //         { pokemon.name }
  //         </li>
  //     ))}
  // </ul>
  //     </useFetch>
  //   </div>
  // )
}

export default App;

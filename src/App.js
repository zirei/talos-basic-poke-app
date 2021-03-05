import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'

import  PokemonsGaleryCards from './components/PokemonsGaleryCards'
import  NavigationBar  from "./components/NavigationBar"
import  Home  from './components/Home'
const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar/>
          <Route path='/' exact component={ Home }/>
          <Route path='/pokemons' component={PokemonsGaleryCards}/>
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

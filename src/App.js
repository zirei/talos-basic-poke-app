import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'

import PokemonsGaleryCards from './components/PokemonsGaleryCards'
import NavigationBar from "./components/NavigationBar"
import Home from './components/Home'
import Chart from './components/ChartComponent'
import Charts from './components/ChartComponent'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavigationBar />
        <Route path='/' exact component={Home} />
        <Route path='/pokemons' component={PokemonsGaleryCards} />
      </BrowserRouter>
    </Provider>
  )
}

export default App;

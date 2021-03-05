import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App/> , document.getElementById('root'));

// //Creando arquitectura de los modales
// const TarjetasDePokemon = (props) => (
//   <div>
//     <span>{props.name}, boton de comparacion, boton de cierre</span>
//     <hr/>
//     <div>
//       <span>img usign id{props.id}</span>
//       <p> Descripcion </p>
//       <hr/>
//       <p> atributos</p>
//     </div>
//     <hr/>
//     <span>Barras ( HP, ATTACK, DEFENSA, SPECIAL-ATTACK, SPECIAL DEFEND, SPEED)</span>
//   </div>
// )

// //Modal 1
// const App = (props) => (
//   <div>
//     <TarjetasDePokemon name='pokemon 1' id={1} />
//     <TarjetasDePokemon name='pokemon 2' id={2} />
//     <TarjetasDePokemon />
//   </div>
// )

// ReactDOM.render(<App/>,
//   document.getElementById('root')
// );
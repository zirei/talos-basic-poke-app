import logo from './logo.svg';
import './App.css';
import {GaleryComponent, useFetch} from './components/GaleryComponent/GaleryComponent'
// generar las iamgenes

const App = () => {
    const [ pokemones, isLoading ] = useFetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    console.log(pokemones)
    return (
        <div>
            <h1>works!</h1>
            { isLoading && <h1>Cargando...</h1> }
            <ul>
                {pokemones.map(pokemon => (
                    <li key={pokemon.id}>
                        { pokemon.name }
                    </li>
                ))}
            </ul>
        </div>
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
  

// class App extends Comment {
  
//   render(){
//       return (
//           <div className='images'>
//               {images.map(image => (
//                   <Image
//                       image={image}
//                       key={image.id = Math.random() }
//                   />
//               ))}
//           </div>
//       )
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

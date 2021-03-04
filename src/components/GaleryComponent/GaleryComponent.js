import React, { useState, useEffect }from 'react'
import galeryStyles from './GaleryComponent.module.css'

//aqui hay un arreglo de imagenes
const images =[
]

// agregar esto a APP
// export const GaleryComponent = (props) => (
//     <div>
//         {/* <img
//             // Para agregar la imagen del pokemon a la card
//             // en srs = {props.image.source}
//             src={props.data.source}
//             alt='Descripcion de la imagen'
//             className='image'
//         /> */}
//             <h1>Hola!</h1>
//         <div>
//             {/* Para mostrar el nombre del pokemon */}
//             {/* {props.pokemon.name}  */}
//             <h2>Hola!</h2>
//         </div>
//     </div>
// )

export const useFetch = (url) => {
  const [ data, setData ] =  useState([])
  const [ isFetching, setFetching ] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setFetching(false)
      })
  }, [ url ])

  return [
    data,
    isFetching
  ]

}




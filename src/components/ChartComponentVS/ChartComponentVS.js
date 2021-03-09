import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js';

const ChartComponentVS = ({ firstPokemonName, firstPokemonStats, pokemonStatsNames, secondPokemonName, secondPokemonStats, firstPokemonColor, firstPokemonBorderColor, secondPokemonColor, secondPokemonBorderColor }) => {
  const chartRef = useRef()
  if (firstPokemonColor === secondPokemonColor){
    secondPokemonColor = 'rgba(167, 246, 222, 1)'
    secondPokemonBorderColor = 'rgba(167, 246, 222, 1)'
  }
  if (firstPokemonName ===  secondPokemonName){
     secondPokemonName += 2
  }

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: pokemonStatsNames,
        datasets: [
          {

            label: firstPokemonName,
            data: firstPokemonStats,
            backgroundColor: [
              firstPokemonColor,
              firstPokemonColor,
              firstPokemonColor,
              firstPokemonColor,
              firstPokemonColor,
              firstPokemonColor,

            ],
            firstPokemonBorderColor: [
              firstPokemonBorderColor,        
              firstPokemonBorderColor,        
              firstPokemonBorderColor,        
              firstPokemonBorderColor,        
              firstPokemonBorderColor,        
              firstPokemonBorderColor,        

            ],
            borderWidth: 1
          },
          {
            label:  secondPokemonName,
            data: secondPokemonStats,
            backgroundColor: [
              secondPokemonColor,
              secondPokemonColor,
              secondPokemonColor,
              secondPokemonColor,
              secondPokemonColor,
              secondPokemonColor,

            ],
            firstPokemonBorderColor: [
              secondPokemonBorderColor,
              secondPokemonBorderColor,
              secondPokemonBorderColor,
              secondPokemonBorderColor,
              secondPokemonBorderColor,
              secondPokemonBorderColor,

            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  })

  return (
    <div>
      <canvas
        ref={chartRef}
        width='400'
        height='400'>
      </canvas>
    </div>
  )

}

export default ChartComponentVS
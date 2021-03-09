import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js'

const ChartComponent = ({ pokemonName, pokemonStats, pokemonStatNames, pokemonColor, pokemonBorderColor }) => {
  const chartRef = useRef()


  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: pokemonStatNames,
        datasets: [{
          label: pokemonName,
          data: pokemonStats,
          backgroundColor: [
            pokemonColor,
            pokemonColor,
            pokemonColor,
            pokemonColor,
            pokemonColor,
            pokemonColor,
            
          ],
          borderColor: [
            pokemonBorderColor,
            pokemonBorderColor,
            pokemonBorderColor,
            pokemonBorderColor,
            pokemonBorderColor,
            pokemonBorderColor,

          ],
          borderWidth: 1
        }]
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

export default ChartComponent
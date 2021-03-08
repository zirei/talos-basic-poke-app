import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js';

const ChartComponentVS = ({ name, stats, statNames, name2, stats2,color, borderColor, color2, borderColor2 }) => {
  const chartRef = useRef()
  if (color === color2){
    color2 = 'rgba(167, 246, 222, 1)'
    borderColor2 = 'rgba(167, 246, 222, 1)'
  }
  if (name === name2){
    name2 += 2
  }

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: statNames,
        datasets: [
          {

            label: name,
            data: stats,
            backgroundColor: [
              color,
              color,
              color,
              color,
              color,
              color,

            ],
            borderColor: [
              borderColor,        
              borderColor,        
              borderColor,        
              borderColor,        
              borderColor,        
              borderColor,        

            ],
            borderWidth: 1
          },
          {
            label: name2,
            data: stats2,
            backgroundColor: [
              color2,
              color2,
              color2,
              color2,
              color2,
              color2,

            ],
            borderColor: [
              borderColor2,
              borderColor2,
              borderColor2,
              borderColor2,
              borderColor2,
              borderColor2,

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
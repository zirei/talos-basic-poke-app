import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js'; 

const ChartComponent = ({name, stats,statNames,color, borderColor}) => {
  const chartRef = useRef()


  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: statNames,
        datasets: [{
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
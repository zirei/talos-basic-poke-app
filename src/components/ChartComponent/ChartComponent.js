import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js'; 

const ChartComponent = ({name, stats,statNames}) => {
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
            'rgba(56, 120, 106, 0.95)',
            'rgba(56, 120, 106, 0.95)',
            'rgba(56, 120, 106, 0.95)',
            'rgba(56, 120, 106, 0.95)',
            'rgba(56, 120, 106, 0.95)',
            'rgba(56, 120, 106, 0.95)',
            
          ],
          borderColor: [
            'rgba(0, 108, 85, 1)',
            'rgba(0, 108, 85, 1)',
            'rgba(0, 108, 85, 1)',
            'rgba(0, 108, 85, 1)',
            'rgba(0, 108, 85, 1)',

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
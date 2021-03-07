import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js';

const ChartComponentVS = ({ name, stats, statNames, name2, stats2 }) => {
  const chartRef = useRef()


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
              'rgba(0, 108, 85, 1)',

            ],
            borderWidth: 1
          },
          {
            label: name2,
            data: stats2,
            backgroundColor: [
              'rgba(86, 174, 157, 0.95)',
              'rgba(86, 174, 157, 0.95)',
              'rgba(86, 174, 157, 0.95)',
              'rgba(86, 174, 157, 0.95)',
              'rgba(86, 174, 157, 0.95)',
              'rgba(86, 174, 157, 0.95)',

            ],
            borderColor: [
              'rgba(148, 203, 193, 1)',
              'rgba(148, 203, 193, 1)',
              'rgba(148, 203, 193, 1)',
              'rgba(148, 203, 193, 1)',
              'rgba(148, 203, 193, 1)',
              'rgba(148, 203, 193, 1)',

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
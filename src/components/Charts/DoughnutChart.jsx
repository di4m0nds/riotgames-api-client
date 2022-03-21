import React from 'react'
import { Doughnut } from 'react-chartjs-2'

// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'

const DoughnutChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Champ Points',
      data: data,
      backgroundColor: ['rgba(44, 173, 233, 0.8)', 'rgba(236, 33, 33, 0.8)'],
      hoverBackgroundColor: ['rgb(44, 173, 233)', 'rgb(236, 33, 33)'],
      borderColor: 'rgba(0,0,0,0.1)'
    }]
  }

  return (
    <Doughnut
      data={chartData}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }}
    />
  )
}

export default DoughnutChart

import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart (props) {
  const data = {
    labels: props.chartData.labels,
    datasets: props.chartData.datasets,
  }

  const options = {
    title: {
      display: true,
      text: 'Doughnut Chart'
    }
  }

  return <Doughnut data={data} options={options} />
}

export default DoughnutChart
import React from 'react'
import { Doughnut, Pie } from 'react-chartjs-2'
import  style from '../PiePage.module.css'

function PieChart (props) {
  const data = {
        labels: props.lables,
        datasets:[
          {
            data: props.data,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  }

 

  return (
    <div className={style.pieChart} >
      <Pie data={data} options={options} />
    </div>
    )
}

export default PieChart
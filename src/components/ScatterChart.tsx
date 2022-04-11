import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Scatter } from 'react-chartjs-2'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

export const data = {
  datasets: [
    {
      label: 'A dataset',
      data: Array.from({ length: 100 }, () => ({
        x: Math.random() * 1000,
        y: Math.random() * 1000,
      })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
}

export default function ScatterChart() {
  return (
    <div className="chart-wrapper">
      <Scatter options={options} data={data} />
    </div>
  )
}

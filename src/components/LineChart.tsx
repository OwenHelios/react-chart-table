import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import BarTable from './BarTable'
import { ChartData } from '../store/ChartData'
import { useRecoilValue } from 'recoil'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

export default function LineChart() {
  const data = useRecoilValue(ChartData)
  return (
    <div className="wrapper">
      <Line options={options} data={data} />
      <hr />
      <BarTable />
    </div>
  )
}

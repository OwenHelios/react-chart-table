import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js'
import { Scatter } from 'react-chartjs-2'
import { ChartData as TableData } from '../store/ChartData'
import BarTable from './BarTable'
import { useRecoilValue } from 'recoil'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export const options: ChartOptions<'scatter'> = {
  plugins: {
    title: {
      display: true,
      text: 'Scatter Chart',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

export default function ScatterChart() {
  const tableData = useRecoilValue(TableData)
  const data: ChartData<'scatter', { x: number; y: number }[], unknown> = {
    labels: tableData.labels,
    datasets: [
      {
        label: tableData.datasets[0].label,
        data: Array.from({ length: 100 }, () => ({
          x: Math.random() * 1000,
          y: Math.random() * 1000,
        })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  }
  return (
    <>
      <div className="chart-wrapper">
        <Scatter options={options} data={data} />
      </div>
      <hr />
      <BarTable />
    </>
  )
}

import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { useRecoilValue } from 'recoil'
import { ChartData as TableData } from '../store/ChartData'
import BarTable from './BarTable'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const options: ChartOptions<'radar'> = {
  plugins: {
    title: {
      display: true,
      text: 'Radar Chart',
    },
  },
  responsive: true,
}

export default function RadarChart() {
  const tableData = useRecoilValue(TableData)
  const data = {
    labels: tableData.labels,
    datasets: [
      {
        label: tableData.datasets[0].label,
        data: tableData.datasets[0].data,
        backgroundColor: tableData.datasets[0].backgroundColor,
        borderColor: tableData.datasets[0].borderColor,
        borderWidth: 1,
      },
    ],
  }
  return (
    <>
      <div className="chart-wrapper">
        <Radar options={options} data={data} />
      </div>
      <hr />
      <BarTable />
    </>
  )
}

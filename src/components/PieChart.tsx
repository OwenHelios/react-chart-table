import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import type { ChartOptions, ChartData } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import BarTable from './BarTable'
import { ChartData as TableData } from '../store/ChartData'
import { useRecoilValue } from 'recoil'
import { tab } from '@testing-library/user-event/dist/tab'

ChartJS.register(ArcElement, Tooltip, Legend)

const options: ChartOptions<'pie'> = {
  plugins: {
    title: {
      display: true,
      text: 'Vertical Stacked Bar Chart',
    },
  },
  responsive: true,
}

export default function PieChart() {
  const tableData = useRecoilValue(TableData)

  const data: ChartData<'pie', number[], string> = {
    labels: tableData.labels,
    datasets: [
      {
        label: tableData.datasets[0].label,
        data: tableData.datasets[0].data,
        backgroundColor: tableData.datasets.map(d => d.backgroundColor),
        borderColor: tableData.datasets.map(d => d.borderColor),
        borderWidth: 1,
      },
    ],
  }
  return (
    <>
      <div className="chart-wrapper">
        <Pie options={options} data={data} />
      </div>
      <hr />
      <BarTable />
    </>
  )
}

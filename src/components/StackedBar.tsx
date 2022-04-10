import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useRecoilValue } from 'recoil'
import { DataCellValue } from '../store/DataCellValue'
import { TableSizeState } from '../store/TableSizeState'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Horizontal Stacked Bar Chart',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Sunny Days',
      data: labels.map(() => Math.ceil(Math.random() * 1000)),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Snowy Days',
      data: labels.map(() => Math.ceil(Math.random() * 1000)),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Rainy Days',
      data: labels.map(() => Math.ceil(Math.random() * 1000)),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
}

const StackedBar: React.FC = () => {
  const tableSize = useRecoilValue(TableSizeState)
  for (let i = 0; i < tableSize.rows; i++) {
    const cellId = 'rowHead_' + i
    const cellValue = useRecoilValue(DataCellValue(cellId))
  }
  return <Bar options={options} data={data} />
}

export default StackedBar

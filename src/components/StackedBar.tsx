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
import { ChartData } from '../store/ChartData'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Vertical Stacked Bar Chart',
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

const StackedBar: React.FC = () => {
  const data = useRecoilValue(ChartData)
  return <Bar options={options} data={data} />
}

export default StackedBar

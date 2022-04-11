import { Routes, Route, Link } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './App.css'
import BarChart from './components/BarChart'
import SampleChart from './components/Chart'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import RadarChart from './components/RadarChart'
import ScatterChart from './components/ScatterChart'

const App = () => {
  return (
    <RecoilRoot>
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="pie">PieChart</Link>
          <Link to="line">LineChart</Link>
          <Link to="radar">RadarChart</Link>
          <Link to="scatter">ScatterChart</Link>
          <Link to="linebar">SampleChart</Link>
        </nav>
        <div className="charts">
          <Routes>
            <Route path="/" element={<BarChart />} />
            <Route path="/pie" element={<PieChart />} />
            <Route path="/line" element={<LineChart />} />
            <Route path="/radar" element={<RadarChart />} />
            <Route path="/scatter" element={<ScatterChart />} />
            <Route path="/linebar" element={<SampleChart />} />
          </Routes>
        </div>
      </>
    </RecoilRoot>
  )
}

export default App

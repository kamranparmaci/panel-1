import { Route, Routes } from 'react-router-dom'
import ChartScreen from './screens/chart'
import Home from './screens/home'
import TableScreen from './screens/table'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="chart" element={<ChartScreen />} />
      <Route path="table" element={<TableScreen />} />
    </Routes>
  )
}

export default App

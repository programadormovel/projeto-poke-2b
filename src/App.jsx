import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import PokeFlex from './PokeFlex.jsx'
import PokeGrid from './PokeGrid.jsx'
import Menu from './Menu'

const App = () => {

  return(
    <Routes>
      <Route index element={<Menu />} />
      <Route path="home" element={<Home />} />
      <Route path="pokeflex" element={<PokeFlex />} />
      <Route path="pokegrid" element={<PokeGrid />} />
    </Routes>
  )
}

export default App

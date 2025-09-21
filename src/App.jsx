import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Recipe from './Pages/Recipe.jsx'
import NavBar from './Components/NavBar.jsx'

function App() {


  return (
    <div>
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/empanada" element={<Recipe/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App

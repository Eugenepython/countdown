

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import FetchWord from './components/FetchWord'
import MathGame from './components/MathGame'
import Home from './Home'



function App() {
  

  return (
    <>
        <BrowserRouter>
      <div>
      <div className="headBar">
        <h className = 'heading'><Link to="/">Home</Link></h>
          <h className = 'heading'><Link to="/fetchword">Anagram Conundrum</Link></h> 
          <h className = 'heading'><Link to="/mathgame">Math Game</Link></h>
    </div>
      <Routes>
      <Route path="/" element = {<Home />}  />
    <Route path="/fetchword" element={<FetchWord />} />
    <Route path="/mathgame" element={<MathGame />} />
  </Routes>
      </div>
   </BrowserRouter>
    </>
  )
}

export default App

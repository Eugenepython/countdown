


import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import FetchWord from './components/FetchWord'
import MathGame from './components/MathGame'

//import './App.css'

function Home() {
  

  return (
    <>
     
    <h className = 'theTitle'>Test your words and maths skills</h>
    <p className = 'theStory'>Based on the hit show countdown, try either an 8 word conundrum or an algebraic problem to solve!</p>
      

    </>
  )
}

export default Home

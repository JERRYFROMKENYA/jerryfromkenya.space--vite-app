import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
function App() {
  
  return (
    <>
  {/* <canvas id="bg"></canvas> */}
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>

      </Routes>

    </Router>
    </>
  
  )
}

export default App

import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
function App() {

  return (
    <>
    <Router>
    <Navbar />
    <Routes>

      <Route path='/' exact element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />

      </Routes>
    </Router>
    </>
  
  )
}

export default App

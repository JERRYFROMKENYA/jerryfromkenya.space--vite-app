import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Write from './pages/Write/Write'
import Single from './pages/Single/Single'
import Blog from './pages/Blog/Blog'
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
    <Router>
    <Navbar />
    <Routes>

      <Route path='/' exact element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      <Route path='/blog/write' element={<Write/>} />
      <Route path='/blog/post' element={<Single/>} />
      <Route path='/blog/' exact element={<Blog/>} />
      <Route path='/signup' element={<SignUp/>} />

      </Routes>
    </Router>
    </>
  
  )
}

export default App

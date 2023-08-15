import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/' element={<Login />} />
    </Routes>
  )
}

export default App
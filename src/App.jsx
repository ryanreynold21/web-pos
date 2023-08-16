import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import EditProfile from './pages/EditProfile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/profile/edit' element={ <EditProfile /> } />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
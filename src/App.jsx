import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import UserOverview from './components/UserOverview'
import EditProfile from './pages/EditProfile'
import Media from './pages/Media'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/media' element={ <Media /> } />
      <Route path='/profile/edit' element={ <EditProfile /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/userOverview' element={<UserOverview />} />
    </Routes>
  )
}

export default App
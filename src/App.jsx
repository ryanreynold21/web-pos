import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import UserOverview from './components/UserOverview'
import EditProfile from './pages/EditProfile'
import Media from './pages/Media'
import User from './pages/User'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/media' element={ <Media /> } />
      <Route path='/profile/edit' element={ <EditProfile /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/user' element={<User />} />
    </Routes>
  )
}
export default App
// 178.128.21.116
// mms23@ygn
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
import Guard from './components/Guard'
import CreateUser from './pages/CreateUser'
import AddProduct from './pages/AddProduct'
import Inventory from './pages/Inventory'
import ProductDetails from './components/products/ProductDetails'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={ <Guard> <Home /> </Guard>  } />
      <Route path='/profile' element={ <Guard> <Profile /> </Guard> } />
      <Route path='/media' element={ <Guard> <Media /> </Guard> } />
      <Route path='/profile/edit' element={ <Guard> <EditProfile /> </Guard> } />
      <Route path='/users' element={<Guard> <User /> </Guard>} />
      <Route path='/users/create' element={<Guard> <CreateUser /> </Guard>} />
      <Route path='/products/create' element={<Guard> <AddProduct /> </Guard>} />
      <Route path='/user' element={<Guard> <User /> </Guard>} />
      <Route path='/user/create' element={<Guard> <CreateUser /> </Guard>} />
      <Route path='/product' element={<Guard> <Inventory /> </Guard>} />
      <Route path='/product/details' element={<Guard> <ProductDetails /> </Guard>} />
    </Routes>
  )
}
export default App
// 178.128.21.116
// mms23@ygn
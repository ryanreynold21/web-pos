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
import Stock from './pages/Stock'
import Cashier from './pages/Cashier'
import Checkout from './pages/Checkout'
import ManageBrand from './pages/ManageBrand'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={ <Guard> <Home /> </Guard>  } />
      <Route path='/media' element={ <Guard> <Media /> </Guard> } />
      <Route path='/profile' element={ <Guard> <Profile /> </Guard> } />
      <Route path='/profile/edit' element={ <Guard> <EditProfile /> </Guard> } />
      <Route path='/users' element={<Guard> <User /> </Guard>} />
      <Route path='/users/create' element={<Guard> <CreateUser /> </Guard>} />
      <Route path='/products' element={<Guard> <Inventory /> </Guard>} />
      <Route path='/products/create' element={<Guard> <AddProduct /> </Guard>} />
      <Route path='/products/details' element={<Guard> <ProductDetails /> </Guard>} />
      <Route path='/stock' element={ <Guard> <Stock /> </Guard>} />
      <Route path='/sale/cashier' element={ <Guard> <Cashier /> </Guard>} />
      <Route path='/checkout' element={ <Guard> <Checkout /> </Guard>} />
      <Route path='/brand' element={ <Guard> <ManageBrand /> </Guard>} />
    </Routes>
  )
}
export default App
// 178.128.21.116
// mms23@ygn
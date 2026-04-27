import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import Admins from './pages/Admins'
import Teams from './pages/Teams'
import PurchaseOrders from './pages/PurchaseOrders'
import Production from './pages/Production'
import Invoicing from './pages/Invoicing'
import Products from './pages/Products'
import Inventory from './pages/Inventory'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/purchase" element={<PurchaseOrders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/production" element={<Production />} />
        <Route path="/invoicing" element={<Invoicing/>} />
      </Route>
    </Routes>
  )
}

export default App

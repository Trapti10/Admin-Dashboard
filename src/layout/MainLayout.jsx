import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='flex bg-lightBg text-white h-screen w-full overflow-hidden'>
      <Sidebar/>
      <div className="flex-1 min-w-0 flex flex-col">
      <Navbar/>
         <div className="p-5 overflow-y-auto">
          <Outlet/>
         </div>
      </div>
    </div>
  )
}

export default MainLayout

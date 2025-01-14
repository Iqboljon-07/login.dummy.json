import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbar/>

      <main><Outlet/></main>


    </div>
  )
}

export default Layout

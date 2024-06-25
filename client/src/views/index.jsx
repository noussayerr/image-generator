import React from 'react'
import Navbar from '../components/navbar'
import Home from './home'
import { Outlet } from 'react-router-dom'
function Index() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Index
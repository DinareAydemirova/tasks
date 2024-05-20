import React from 'react'
import Navbar from './navbar/İndex'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
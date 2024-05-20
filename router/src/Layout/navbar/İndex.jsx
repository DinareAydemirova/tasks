import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
    <ul>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/blog">blog</Link>
        <Link to="/service">service</Link>
    </ul>
  </nav>
  
  )
}

export default Navbar
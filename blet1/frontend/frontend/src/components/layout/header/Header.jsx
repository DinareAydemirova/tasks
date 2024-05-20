import React from 'react'
import style from './header.module.scss'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div   className={style.container}>
        <div className={style.navbar}>
            <h1>Selling.</h1>
            <ul className={style.pages}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/basket">Basket</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <IoMenu className={style.menu}/>

            </ul>
        </div>
    </div>
  )
}

export default Header
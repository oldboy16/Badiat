import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import badiat from '../../assets/img/Badiiyat.svg'
import avatar from '../../assets/img/avatar.svg'

function Header() {
  return (
    <header>
        <div className="container">
          <nav className='nav'>
            <Link to='/'>
              <img src={badiat} alt="" />
            </Link>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to='/'>Bosh sahifa</Link>
              </li>
              <li className="nav__item">
                <Link to='/books'>Kitoblar</Link>
              </li>
              <li className="nav__item">
                <Link to='/profile'>Profile</Link>
              </li>
            </ul>
            <Link>
            <img src={avatar} alt="" />
            </Link>
          </nav>
        </div>
    </header>
  )
}

export default Header
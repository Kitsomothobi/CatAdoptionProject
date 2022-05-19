import React from 'react'
import "./navbar.scss"

export default function navbar() {
  return (
    <nav className="navbar">
        {/* Logo section */}
        <img src="https://static.vecteezy.com/system/resources/previews/002/581/814/original/cute-cat-head-cartoon-logo-cat-head-good-for-cat-care-related-products-free-vector.jpg"alt="logo" />

        {/* Navbar Components */}
        <ul className="nav-links">
            <li><a className="nav-link" href="#">Home</a></li>
            <li><a className="nav-link" href="#">About us</a></li>
            <li><a className="nav-link" href="#">Contacts</a></li>
        </ul>
    </nav>
  )
}

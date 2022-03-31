import React, { useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenu, setIsMenu] =  useState(false);
    const menuClass = `menu-btn ${isMenu ? "open" : ""}`
    const rightSideId = isMenu ? "hidden" : ""
    return (
        <>
        <header>
            <div className='leftSide'>
                <Link onClick={() => setIsMenu(false)} to="/"><img className="logo" src="logo512.png" alt="logo" /></Link>
                <h1><Link onClick={() => setIsMenu(false)} to="/"></Link>Food App</h1>
            </div>
            <div className={menuClass} onClick={() => setIsMenu(!isMenu)}>
                <div className="menu-btn-burger"></div>
            </div>
            <nav className='rightSide' id={rightSideId}>
                <ul dir='rtl'>
                    <li><Link onClick={() => setIsMenu(false)} to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

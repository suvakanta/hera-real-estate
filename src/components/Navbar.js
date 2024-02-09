import {Link} from 'react-router-dom'
import './Navbar.css'
import React from 'react'

function Navbar(){
    return (
        <div className=''header>
            <nav className ='navbar'>
                <img src="https://i.postimg.cc/0NNqk55q/345-C0248-AB01-4-F1-B-B66-F-434-CEE7077-AD.png" alt="" />

            <ul className ='nav-links'>
                <li>
                    <Link to='/'>Home</Link>

                </li>
                <li>
                    <Link to='/properties'>Lots & Properties</Link>

                </li>
                <li>
                    <Link to='/about'>About</Link>

                </li>
                <li>
                    <Link to='/contact'>Contact</Link>

                </li>
                
            </ul>
            </nav>
            
        </div>
    )
}
export default Navbar;
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const [navColor,setNavColor]=useState(false)

    const changeNavColor =()=>{
        if(window.scrollY >= 45){
            setNavColor(true)
        }
        else{
            setNavColor(false)
        }

    }

    window.addEventListener('scroll' ,changeNavColor)

    return (
        <div className={navColor ? 'header activeH' : 'header' }>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <h2>Vaibhav</h2>
                    {/* <img src="./images/logo1.png" alt='logo' /> */}
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<i class="bi bi-x-lg"></i>)
                        : (<i class="bi bi-list"></i>)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <NavLink to={'/'} onClick={closeMenu}>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/skills'} onClick={closeMenu}>Skills</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/experience'} onClick={closeMenu}>Experience</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/projects'} onClick={closeMenu}>Projects</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/contact'} onClick={closeMenu}>Contact</NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
import React, { useState } from 'react'
import '../App.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const [navColor,setNavColor]=useState(false)

    const changeNavColor =()=>{
        if(window.scrollY >= 90){
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
                        <a href='/' link='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Skills' onClick={closeMenu}>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Experience' onClick={closeMenu}>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Projects' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Contact' onClick={closeMenu}>Contact</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
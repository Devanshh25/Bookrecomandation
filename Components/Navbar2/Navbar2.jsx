import React from 'react'
import './navbar2.css';
import { Link, Outlet } from "react-router-dom";

import vector25 from './vector25.svg'
import vector24 from './vector24.svg'
import vector23 from './vector23.svg'
import vector22 from './vector22.svg'
import NavbarMain from '../Navbar/NavbarMain';
const Navbar2 = () => {
    return (
        <div className='macbook-pro'>

            <div className="group">
                <div className="navbar-wrapper">
                    <div className="navbar">
                        <img className="vector-3" alt="Vector" src={vector25} />
                        <div className="text-wrapper-4">Home</div>
                        <img className="vector-4" alt="Vector" src={vector24} />
                        <div className="text-wrapper-5">About</div>
                        <img className="vector-5" alt="Vector" src={vector23} />
                        <Link className='nav-link' to='/explore'> <div className="text-wrapper-6">Explore</div></Link>
                        <img className="vector-6" alt="Vector" src={vector22} />
                        <Link className='nav-link' to='/favorite'> <div className="text-wrapper-7">Favorite</div></Link>
                    </div>
                </div>
                <Outlet />
            </div>

        </div >
    )
}

export default Navbar2

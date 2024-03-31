import React, { useContext } from "react";
import "./navbarmain.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ellipse1 from './ellipse1.png';
import vector6 from "./vector6.svg";
import vector7 from "./vector7.svg";
import vector8 from "./vector8.svg";
import Navbar2 from "../Navbar2/Navbar2";
import axios from 'axios';
import react, { useState } from 'react';
import { UserContext } from "../../src/contexts/usercontext";
import { signOutUser } from "../firebase/firebase.utils";



const NavbarMain = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <div className="front-logged-in">

            <header className="header">
                <div className="rectangle-7" />
                <Link className="nav-link" to='/'>  <p className="travel-reads">
                    <span className="span">Travel</span>
                    <span className="text-wrapper-5">Reads</span>
                </p></Link>
                {/* <input className="rectangle-8" type="text" placeholder="Search" />
                <img className="vector" alt="Vector" src={vector8} /> */}
                <div className="text-wrapper-6"></div>
                <img className="vector-2" alt="Vector" src={vector7} />
                <div className="text-wrapper-7">Indore</div>
                <img className="vector-3" alt="Vector" src={vector6} />
                <div className="ellipse" />
                {
                    currentUser ? (
                        <Span className="ellipse-2" onClick={signOutHandler} >Sign Out</Span>
                    ) : (
                        <Link className="nav-link" to="/SignIn"> <h1 className="ellipse-2">Sign-In</h1></Link>
                    )
                }
                // <Link className="nav-link" to="/SignIn"> <h1 className="ellipse-2">Sign-In</h1>

                    {/* <img className="ellipse-2" alt="Ellipse" src={ellipse1} />*/}</Link>
            </header>
            <div className="overlap-group-3">
            </div>
            <Outlet />
        </div>

    );
};


export default NavbarMain;
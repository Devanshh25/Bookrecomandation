import React, { useState } from 'react'
import Navbar2 from "../Navbar2/Navbar2";
import axios from 'axios';
import Cards from './Cards'

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ellipse1 from './ellipse1.png';
import vector6 from "./vector6.svg";
import vector7 from "./vector7.svg";
import vector8 from "./vector8.svg";

const Explore = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }



    return (
        <div className="front-logged-in">

            <header className="header1">
                <div className="rectangle-7" />
                <Link className="nav-link" to='/'>  <p className="travel-reads">
                    <span className="span">Travel</span>
                    <span className="text-wrapper-5">Reads</span>
                </p></Link>
                <input className="rectangle-8" type="text" placeholder="Enter Your Book Name" value={search} onChange={e => setSearch(e.target.value)}
                    onKeyPress={searchBook} />
                <img className="vector" alt="Vector" src={vector8} />
                <div className="text-wrapper-6"></div>
                <img className="vector-2" alt="Vector" src={vector7} />
                <div className="text-wrapper-7">Indore</div>
                <img className="vector-3" alt="Vector" src={vector6} />
                <div className="ellipse" />
                <Link className="nav-link" to="/SignIn"> <img className="ellipse-2" alt="Ellipse" src={ellipse1} /></Link>
            </header>
            <div className="overlap-group-3">
            </div>
            <Navbar2 />
            <div className="container1">
                {
                    <Cards book={bookData} />

                }
                <Outlet />
            </div>
        </div>
    )

}

export default Explore;

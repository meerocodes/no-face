import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import About from "./About";
import NFC from '../assets/NFC2019.png'



const Nav = () => {
    return (
        <header>
            <nav>
                <div className="wrapper">
                    <h1>NOFACECLUB</h1>
                    <Link to='/'><img src={logo} alt="Logo" /></Link>
                    <Link to ='/About'> <h3 className="about">About</h3></Link>
                </div>
            </nav>
        </header>
    )
};

export default Nav;
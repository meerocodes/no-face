import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import NFC from '../assets/NFC2019.png'



const Nav = () => {
    return (
        <header>
            <nav>
                <div className="wrapper">
                    <h1>NOFACECLUB</h1>
                    <Link to='/'><img src={logo} alt="Logo" /></Link>
                    <div className="menu">
                        <div className="rightSide">
                           <Link to ='/about'> <h3 className="about">About</h3></Link>
                            <img src={NFC} className="nfc2019" alt=" NFC logo"/>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Nav;
import React from "react";
import logo from '../assets/logo.png';


const Nav = () => {
    return (
        <header>
            <nav>
                <div className="wrapper">
                    <h1>NOFACECLUB</h1>
                    <img src={logo} alt="Logo" />
                    <div className="socials">social icons here</div>
                </div>
            </nav>
        </header>
    )
};

export default Nav;
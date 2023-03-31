import React from "react";
import logo from '../assets/logo.png';
import h1 from "../assets/noFaceClubImg.png"


const Nav = () => {
    return (
        <header>
            <nav>
                <div className="wrapper">
                    <img src={h1} alt="no Face Club in caligraphy"/>
                    <img src={logo} alt="Logo" />
                    <div className="socials">social icons here</div>
                </div>
            </nav>
        </header>
    )
};

export default Nav;
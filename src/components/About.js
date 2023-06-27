import { Link } from "react-router-dom";
import logo3d from '../assets/noFaceLogoBackgroundless.gif'


const About = () => {
    return (
        <div className="aboutPage">
            <div className="wrapper">
                <div className="topAbout">
                    <h1>WHO IS NOFACECLUB? </h1>
                    <h2><span>F</span>ounded in November 2019, <span>NOFACECLUB</span> is a collective of visionary minds driven by a singular purpose: to stand the f*ck out. We
                    craft high-quality garments that encapsulate culture, history, and contemporary street-life.</h2>
                </div>
     
          

                <div className="noFaceIsUs">
                    <h3>Witness what we make.</h3>
                    <h3>Monthly drops.</h3>
                    <h3>Launching Summer 2023.</h3>
                </div>

                <div className="bottomAbout">
                    <h1>LOOK <br></br>DIFFERENT</h1>
                <Link to='/preOrder'><img src={logo3d} alt ='no face logo 3d render gif'></img></Link>
                </div>

            </div>
        </div>

    )
}

export default About;
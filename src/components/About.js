import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="About">
            <div className="wrapper">
                <p>About nfc </p>
                <Link to='/'><button class="back"> Home</button></Link>

            </div>
        </div>

    )
}

export default About;
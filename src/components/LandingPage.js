import logo3d from '../assets/noFaceLogoBackgroundless.gif'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return(
        <section className="landing">

                <Link to='/'><img src={logo3d} alt ='no face logo 3d render gif'></img></Link>
                <Link to='/preOrder' className='enterLink'>ENTER &nbsp;  ▶︎ </Link>



        </section>
    )
}

export default LandingPage;
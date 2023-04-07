import tShirt from '../assets/noFace3dRender.gif';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <main>
                <section className="main">
                    <div className="wrapper">
                        <aside className="shirtDetails">
                            <h3>" PRE - FACE "</h3>
                            <p>100% COTTON</p>
                            <p>265 GSM</p>
                            <p>OVERSIZED DROP SHOULDER FIT</p>
                            <p>ART ON YOUR BACK.</p>
                            <Link to='/joinTheRevolution'>
                            <button>view landing</button>
                            </Link>
                        </aside>
                            <div className="imgContainer">
                                <img src={tShirt} alt =' no face club t shirt 3d render'></img>
                            </div>
                        <div className="button">
                            <button>PRE-ORDER</button>
                        </div>
                    </div>
                </section>
            </main>
            
        </>
       
    )
};

export default Main;
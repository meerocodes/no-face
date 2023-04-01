import tShirt from '../assets/noFace3dRender.gif';

const Main = () => {
    return (
        <>
            <main>
                <section className="main">
                    <div className="wrapper">
                        <aside className="shirtDetails">
                            <p>100% COTTON</p>
                            <p>265 GSM</p>
                            <p>OVERSIZED DROP SHOULDER FIT</p>
                            <p>ART ON YOUR BACK.</p>
                        </aside>
                            <div className="imgContai">
                                <img src={tShirt} alt =' no face club t shirt'></img>
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
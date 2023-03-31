import tShirt from '../assets/T-Shirt.png'
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
                        
                        <img src={tShirt} alt =' no face club t shirt'></img>
                        <button>PRE-ORDER</button>
                    </div>
                </section>
            </main>
            
        </>
       
    )
};

export default Main;
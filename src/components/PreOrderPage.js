import tShirt from '../assets/noFace3dRender-compressed.gif';
import Countdown from './CountDown';
import Nav from './Nav';
import ShopifyBuyButton from './ShopifyBuy';

const PreOrderPage = () => {
    return(
        <>
            <Nav/>
            <section className="preOrder">
                <div className="wrapper">
                    {/* <h3>【ARC 1】</h3>
                    <h2>JOIN THE REVOLUTION</h2> */}
                        <img src={tShirt} alt =' no face club t shirt 3d render'></img>
                
                    <br></br>
                    <div className="buyButton">
                        <h2>" PRE-FACE "</h2>
                        <h3 className='description'>Drop shoulder. 100% cotton tee. Made in Los Angeles, designed in Toronto. Statement piece.</h3>
                        <h3 className='price'>60.00</h3>
                        <h4>UNITS SOLD: 53/100</h4>

                        <ShopifyBuyButton productId="6959503802465" />
                    </div>
                  
                </div>
                <aside>
                        <Countdown 
                        countdownTimestampMs={1690000909911}/>
                    </aside>
            </section>
        </>

    )
}
export default PreOrderPage;
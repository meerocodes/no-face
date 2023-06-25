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
                        <h2>" Pre-Face "</h2>
                        <ShopifyBuyButton productId="6959503802465" />
                        <h4>units left: 55/100</h4>

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
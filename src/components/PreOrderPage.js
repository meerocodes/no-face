import tShirt from '../assets/noFace3dRender.gif';
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
                    <div className="imgContainer">
                        <img src={tShirt} alt =' no face club t shirt 3d render'></img>
                    </div>
                    <div className="buyButton">
                    <ShopifyBuyButton productId="6959503802465" />

                    </div>
                  
                </div>
            </section>
        </>

    )
}
export default PreOrderPage;